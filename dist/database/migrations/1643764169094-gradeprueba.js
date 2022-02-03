"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gradeprueba1643764169094 = void 0;
class gradeprueba1643764169094 {
    constructor() {
        this.name = 'gradeprueba1643764169094';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "recurso" ("id_recurso" SERIAL NOT NULL, "nombre_recurso" character varying(40) NOT NULL, "descripcion_recurso" character varying(150) NOT NULL, "enlace_recurso" character varying(150) NOT NULL, "status" character varying(8) NOT NULL DEFAULT 'ACTIVE', CONSTRAINT "UQ_84e99f10d0c781a4ac8e37b54cd" UNIQUE ("nombre_recurso"), CONSTRAINT "UQ_22e20b21cf59b3d33224ec1ecaa" UNIQUE ("descripcion_recurso"), CONSTRAINT "UQ_0311f799afbd97a2871073835e8" UNIQUE ("enlace_recurso"), CONSTRAINT "PK_512ccf11a581e24d6302261bfa2" PRIMARY KEY ("id_recurso"))`);
        await queryRunner.query(`CREATE TABLE "tema" ("id_topic" SERIAL NOT NULL, "name_topic" character varying(40) NOT NULL, "description_topic" character varying(150) NOT NULL, "status" character varying(8) NOT NULL DEFAULT 'ACTIVE', CONSTRAINT "PK_070d83f830116c9742f8327df69" PRIMARY KEY ("id_topic"))`);
        await queryRunner.query(`CREATE TABLE "user_details" ("id" SERIAL NOT NULL, "name" character varying(50), "lastname" character varying, "status" character varying(8) NOT NULL DEFAULT 'ACTIVE', "created_at" TIMESTAMP DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), CONSTRAINT "PK_fb08394d3f499b9e441cab9ca51" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "roles" ("id" SERIAL NOT NULL, "name" character varying(20) NOT NULL, "description" text NOT NULL, "status" character varying(8) NOT NULL DEFAULT 'ACTIVE', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "username" character varying(25) NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "status" character varying(8) NOT NULL DEFAULT 'ACTIVE', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "detail_id" integer NOT NULL, CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "REL_9fc134ca20766e165ad650ee74" UNIQUE ("detail_id"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ruta" ("id_ruta" SERIAL NOT NULL, "nombre_ruta" character varying(40) NOT NULL, "descripcion_ruta" character varying(150) NOT NULL, "dificultad" integer NOT NULL, "cantidad_temas" integer NOT NULL, "cantidad_recursos" integer NOT NULL, "status" character varying(8) NOT NULL DEFAULT 'ACTIVE', CONSTRAINT "UQ_1148dea49b9169bfb24d21502e9" UNIQUE ("nombre_ruta"), CONSTRAINT "UQ_8cb1c5f3085ae72b6222b15ecb7" UNIQUE ("descripcion_ruta"), CONSTRAINT "PK_26a5677b445ca25ad52aa2d8af5" PRIMARY KEY ("id_ruta"))`);
        await queryRunner.query(`CREATE TABLE "comentario" ("id_comment" SERIAL NOT NULL, "content" character varying(150) NOT NULL, "status" character varying(8) NOT NULL DEFAULT 'ACTIVE', "userId" integer, "learningPathIdRuta" integer, CONSTRAINT "PK_a7431b4b074e1daba64e2f5b3c4" PRIMARY KEY ("id_comment"))`);
        await queryRunner.query(`CREATE TABLE "calificacion" ("grade" integer NOT NULL, "status" character varying(8) NOT NULL DEFAULT 'ACTIVE', "userId" integer NOT NULL, "learningPathIdRuta" integer NOT NULL, CONSTRAINT "PK_418f06a1365f28ad81d9b3015b0" PRIMARY KEY ("userId", "learningPathIdRuta"))`);
        await queryRunner.query(`CREATE TABLE "recurso_tema" ("id_tema" integer NOT NULL, "id_recurso" integer NOT NULL, CONSTRAINT "PK_ea80c38e7c688a95e62fcfe658c" PRIMARY KEY ("id_tema", "id_recurso"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d5b6525966f87b62a61659dd5b" ON "recurso_tema" ("id_tema") `);
        await queryRunner.query(`CREATE INDEX "IDX_86764cf176bc9f63d9a5ece0e3" ON "recurso_tema" ("id_recurso") `);
        await queryRunner.query(`CREATE TABLE "roles_users_users" ("rolesId" integer NOT NULL, "usersId" integer NOT NULL, CONSTRAINT "PK_d9b9cca39b8cc7e99072274dafa" PRIMARY KEY ("rolesId", "usersId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_6baa1fce24dde516186c4f0269" ON "roles_users_users" ("rolesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_391282056f6da8665b38480a13" ON "roles_users_users" ("usersId") `);
        await queryRunner.query(`CREATE TABLE "user_roles" ("usersId" integer NOT NULL, "rolesId" integer NOT NULL, CONSTRAINT "PK_38ffcfb865fc628fa337d9a0d4f" PRIMARY KEY ("usersId", "rolesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_99b019339f52c63ae615358738" ON "user_roles" ("usersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_13380e7efec83468d73fc37938" ON "user_roles" ("rolesId") `);
        await queryRunner.query(`CREATE TABLE "inscripcion" ("id_usuario" integer NOT NULL, "id_ruta" integer NOT NULL, CONSTRAINT "PK_d244f2a1c518e3eeaa82a812be5" PRIMARY KEY ("id_usuario", "id_ruta"))`);
        await queryRunner.query(`CREATE INDEX "IDX_9e2673a63396c30a3abaf025ad" ON "inscripcion" ("id_usuario") `);
        await queryRunner.query(`CREATE INDEX "IDX_020ad7fe7ec21d9e9d9085afc3" ON "inscripcion" ("id_ruta") `);
        await queryRunner.query(`CREATE TABLE "ruta_tema" ("id_ruta" integer NOT NULL, "id_tema" integer NOT NULL, CONSTRAINT "PK_e989b4098c4d70216d6cc4730f3" PRIMARY KEY ("id_ruta", "id_tema"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e7ab191b44b536a94221e9bd14" ON "ruta_tema" ("id_ruta") `);
        await queryRunner.query(`CREATE INDEX "IDX_63f21b6128bdd35e2669aca7e7" ON "ruta_tema" ("id_tema") `);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_9fc134ca20766e165ad650ee740" FOREIGN KEY ("detail_id") REFERENCES "user_details"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comentario" ADD CONSTRAINT "FK_27a52e0cd57d5571f00d229cfc3" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comentario" ADD CONSTRAINT "FK_160115bda380ef7609c6a5404c0" FOREIGN KEY ("learningPathIdRuta") REFERENCES "ruta"("id_ruta") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "calificacion" ADD CONSTRAINT "FK_81d9a14723b88d806fe7bc04f06" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "calificacion" ADD CONSTRAINT "FK_8ae83a4ebb6d4102a0b00537475" FOREIGN KEY ("learningPathIdRuta") REFERENCES "ruta"("id_ruta") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "recurso_tema" ADD CONSTRAINT "FK_d5b6525966f87b62a61659dd5b7" FOREIGN KEY ("id_tema") REFERENCES "tema"("id_topic") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "recurso_tema" ADD CONSTRAINT "FK_86764cf176bc9f63d9a5ece0e3b" FOREIGN KEY ("id_recurso") REFERENCES "recurso"("id_recurso") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "roles_users_users" ADD CONSTRAINT "FK_6baa1fce24dde516186c4f0269a" FOREIGN KEY ("rolesId") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "roles_users_users" ADD CONSTRAINT "FK_391282056f6da8665b38480a131" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_roles" ADD CONSTRAINT "FK_99b019339f52c63ae6153587380" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_roles" ADD CONSTRAINT "FK_13380e7efec83468d73fc37938e" FOREIGN KEY ("rolesId") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "inscripcion" ADD CONSTRAINT "FK_9e2673a63396c30a3abaf025ad6" FOREIGN KEY ("id_usuario") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "inscripcion" ADD CONSTRAINT "FK_020ad7fe7ec21d9e9d9085afc31" FOREIGN KEY ("id_ruta") REFERENCES "ruta"("id_ruta") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ruta_tema" ADD CONSTRAINT "FK_e7ab191b44b536a94221e9bd14b" FOREIGN KEY ("id_ruta") REFERENCES "ruta"("id_ruta") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "ruta_tema" ADD CONSTRAINT "FK_63f21b6128bdd35e2669aca7e70" FOREIGN KEY ("id_tema") REFERENCES "tema"("id_topic") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "ruta_tema" DROP CONSTRAINT "FK_63f21b6128bdd35e2669aca7e70"`);
        await queryRunner.query(`ALTER TABLE "ruta_tema" DROP CONSTRAINT "FK_e7ab191b44b536a94221e9bd14b"`);
        await queryRunner.query(`ALTER TABLE "inscripcion" DROP CONSTRAINT "FK_020ad7fe7ec21d9e9d9085afc31"`);
        await queryRunner.query(`ALTER TABLE "inscripcion" DROP CONSTRAINT "FK_9e2673a63396c30a3abaf025ad6"`);
        await queryRunner.query(`ALTER TABLE "user_roles" DROP CONSTRAINT "FK_13380e7efec83468d73fc37938e"`);
        await queryRunner.query(`ALTER TABLE "user_roles" DROP CONSTRAINT "FK_99b019339f52c63ae6153587380"`);
        await queryRunner.query(`ALTER TABLE "roles_users_users" DROP CONSTRAINT "FK_391282056f6da8665b38480a131"`);
        await queryRunner.query(`ALTER TABLE "roles_users_users" DROP CONSTRAINT "FK_6baa1fce24dde516186c4f0269a"`);
        await queryRunner.query(`ALTER TABLE "recurso_tema" DROP CONSTRAINT "FK_86764cf176bc9f63d9a5ece0e3b"`);
        await queryRunner.query(`ALTER TABLE "recurso_tema" DROP CONSTRAINT "FK_d5b6525966f87b62a61659dd5b7"`);
        await queryRunner.query(`ALTER TABLE "calificacion" DROP CONSTRAINT "FK_8ae83a4ebb6d4102a0b00537475"`);
        await queryRunner.query(`ALTER TABLE "calificacion" DROP CONSTRAINT "FK_81d9a14723b88d806fe7bc04f06"`);
        await queryRunner.query(`ALTER TABLE "comentario" DROP CONSTRAINT "FK_160115bda380ef7609c6a5404c0"`);
        await queryRunner.query(`ALTER TABLE "comentario" DROP CONSTRAINT "FK_27a52e0cd57d5571f00d229cfc3"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_9fc134ca20766e165ad650ee740"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_63f21b6128bdd35e2669aca7e7"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e7ab191b44b536a94221e9bd14"`);
        await queryRunner.query(`DROP TABLE "ruta_tema"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_020ad7fe7ec21d9e9d9085afc3"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9e2673a63396c30a3abaf025ad"`);
        await queryRunner.query(`DROP TABLE "inscripcion"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_13380e7efec83468d73fc37938"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_99b019339f52c63ae615358738"`);
        await queryRunner.query(`DROP TABLE "user_roles"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_391282056f6da8665b38480a13"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6baa1fce24dde516186c4f0269"`);
        await queryRunner.query(`DROP TABLE "roles_users_users"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_86764cf176bc9f63d9a5ece0e3"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d5b6525966f87b62a61659dd5b"`);
        await queryRunner.query(`DROP TABLE "recurso_tema"`);
        await queryRunner.query(`DROP TABLE "calificacion"`);
        await queryRunner.query(`DROP TABLE "comentario"`);
        await queryRunner.query(`DROP TABLE "ruta"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "roles"`);
        await queryRunner.query(`DROP TABLE "user_details"`);
        await queryRunner.query(`DROP TABLE "tema"`);
        await queryRunner.query(`DROP TABLE "recurso"`);
    }
}
exports.gradeprueba1643764169094 = gradeprueba1643764169094;
//# sourceMappingURL=1643764169094-gradeprueba.js.map