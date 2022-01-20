import {MigrationInterface, QueryRunner} from "typeorm";

export class nuevaMigracion1642641669515 implements MigrationInterface {
    name = 'nuevaMigracion1642641669515'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "recurso" ("id_recurso" SERIAL NOT NULL, "nombre_recurso" character varying(40) NOT NULL, "descripcion_recurso" character varying(150) NOT NULL, "enlace_recurso" character varying(150) NOT NULL, "status" character varying(8) NOT NULL DEFAULT 'ACTIVE', CONSTRAINT "UQ_84e99f10d0c781a4ac8e37b54cd" UNIQUE ("nombre_recurso"), CONSTRAINT "UQ_22e20b21cf59b3d33224ec1ecaa" UNIQUE ("descripcion_recurso"), CONSTRAINT "UQ_0311f799afbd97a2871073835e8" UNIQUE ("enlace_recurso"), CONSTRAINT "PK_512ccf11a581e24d6302261bfa2" PRIMARY KEY ("id_recurso"))`);
        await queryRunner.query(`CREATE TABLE "tema" ("id_topic" SERIAL NOT NULL, "name_topic" character varying(40) NOT NULL, "description_topic" character varying(150) NOT NULL, "status" character varying(8) NOT NULL DEFAULT 'ACTIVE', CONSTRAINT "PK_070d83f830116c9742f8327df69" PRIMARY KEY ("id_topic"))`);
        await queryRunner.query(`CREATE TABLE "user_details" ("id" SERIAL NOT NULL, "name" character varying(50), "lastname" character varying, "status" character varying(8) NOT NULL DEFAULT 'ACTIVE', "created_at" TIMESTAMP DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), CONSTRAINT "PK_fb08394d3f499b9e441cab9ca51" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "roles" ("id" SERIAL NOT NULL, "name" character varying(20) NOT NULL, "description" text NOT NULL, "status" character varying(8) NOT NULL DEFAULT 'ACTIVE', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "username" character varying(25) NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "status" character varying(8) NOT NULL DEFAULT 'ACTIVE', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "detail_id" integer NOT NULL, CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "REL_9fc134ca20766e165ad650ee74" UNIQUE ("detail_id"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ruta" ("id_ruta" SERIAL NOT NULL, "nombre_ruta" character varying(40) NOT NULL, "descripcion_ruta" character varying(150) NOT NULL, "dificultad" integer NOT NULL, "cantidad_temas" integer NOT NULL, "cantidad_recursos" integer NOT NULL, "status" character varying(8) NOT NULL DEFAULT 'ACTIVE', CONSTRAINT "UQ_1148dea49b9169bfb24d21502e9" UNIQUE ("nombre_ruta"), CONSTRAINT "UQ_8cb1c5f3085ae72b6222b15ecb7" UNIQUE ("descripcion_ruta"), CONSTRAINT "PK_26a5677b445ca25ad52aa2d8af5" PRIMARY KEY ("id_ruta"))`);
        await queryRunner.query(`CREATE TABLE "tema-ruta" ("id_recurso" integer NOT NULL, "id_tema" integer NOT NULL, CONSTRAINT "PK_2f0f60389b537aa81d1d70a780d" PRIMARY KEY ("id_recurso", "id_tema"))`);
        await queryRunner.query(`CREATE INDEX "IDX_b7df6ac2696380024ac2102e0a" ON "tema-ruta" ("id_recurso") `);
        await queryRunner.query(`CREATE INDEX "IDX_6c4e148a15a27470ec663e3c8b" ON "tema-ruta" ("id_tema") `);
        await queryRunner.query(`CREATE TABLE "user_roles" ("usersId" integer NOT NULL, "rolesId" integer NOT NULL, CONSTRAINT "PK_38ffcfb865fc628fa337d9a0d4f" PRIMARY KEY ("usersId", "rolesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_99b019339f52c63ae615358738" ON "user_roles" ("usersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_13380e7efec83468d73fc37938" ON "user_roles" ("rolesId") `);
        await queryRunner.query(`CREATE TABLE "inscripcion" ("usersId" integer NOT NULL, "rutaIdRuta" integer NOT NULL, CONSTRAINT "PK_a030eec04a6cd64fe703cf6cabc" PRIMARY KEY ("usersId", "rutaIdRuta"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a82fabffe58f7a5544127f5faf" ON "inscripcion" ("usersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_e73141fcc8519691e1188187e8" ON "inscripcion" ("rutaIdRuta") `);
        await queryRunner.query(`ALTER TABLE "tema-ruta" DROP CONSTRAINT "PK_2f0f60389b537aa81d1d70a780d"`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" ADD CONSTRAINT "PK_6c4e148a15a27470ec663e3c8b6" PRIMARY KEY ("id_tema")`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b7df6ac2696380024ac2102e0a"`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" DROP COLUMN "id_recurso"`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" ADD "id_recurso" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" DROP CONSTRAINT "PK_6c4e148a15a27470ec663e3c8b6"`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" ADD CONSTRAINT "PK_2f0f60389b537aa81d1d70a780d" PRIMARY KEY ("id_tema", "id_recurso")`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" ADD "id_ruta" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" DROP CONSTRAINT "PK_2f0f60389b537aa81d1d70a780d"`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" ADD CONSTRAINT "PK_b3af8cb0f9870267c0ffd962d41" PRIMARY KEY ("id_tema", "id_recurso", "id_ruta")`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" DROP CONSTRAINT "PK_b3af8cb0f9870267c0ffd962d41"`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" ADD CONSTRAINT "PK_2f0f60389b537aa81d1d70a780d" PRIMARY KEY ("id_recurso", "id_tema")`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" DROP CONSTRAINT "PK_b3af8cb0f9870267c0ffd962d41"`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" ADD CONSTRAINT "PK_83f21fdafaff0e8fe06459aba52" PRIMARY KEY ("id_tema", "id_ruta")`);
        await queryRunner.query(`CREATE INDEX "IDX_b7df6ac2696380024ac2102e0a" ON "tema-ruta" ("id_recurso") `);
        await queryRunner.query(`CREATE INDEX "IDX_a2895bf34469bbc938b8fc4760" ON "tema-ruta" ("id_ruta") `);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_9fc134ca20766e165ad650ee740" FOREIGN KEY ("detail_id") REFERENCES "user_details"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" ADD CONSTRAINT "FK_b7df6ac2696380024ac2102e0a0" FOREIGN KEY ("id_recurso") REFERENCES "recurso"("id_recurso") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" ADD CONSTRAINT "FK_6c4e148a15a27470ec663e3c8b6" FOREIGN KEY ("id_tema") REFERENCES "tema"("id_topic") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" ADD CONSTRAINT "FK_a2895bf34469bbc938b8fc4760d" FOREIGN KEY ("id_ruta") REFERENCES "ruta"("id_ruta") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_roles" ADD CONSTRAINT "FK_99b019339f52c63ae6153587380" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_roles" ADD CONSTRAINT "FK_13380e7efec83468d73fc37938e" FOREIGN KEY ("rolesId") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "inscripcion" ADD CONSTRAINT "FK_a82fabffe58f7a5544127f5faf3" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "inscripcion" ADD CONSTRAINT "FK_e73141fcc8519691e1188187e8e" FOREIGN KEY ("rutaIdRuta") REFERENCES "ruta"("id_ruta") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "inscripcion" DROP CONSTRAINT "FK_e73141fcc8519691e1188187e8e"`);
        await queryRunner.query(`ALTER TABLE "inscripcion" DROP CONSTRAINT "FK_a82fabffe58f7a5544127f5faf3"`);
        await queryRunner.query(`ALTER TABLE "user_roles" DROP CONSTRAINT "FK_13380e7efec83468d73fc37938e"`);
        await queryRunner.query(`ALTER TABLE "user_roles" DROP CONSTRAINT "FK_99b019339f52c63ae6153587380"`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" DROP CONSTRAINT "FK_a2895bf34469bbc938b8fc4760d"`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" DROP CONSTRAINT "FK_6c4e148a15a27470ec663e3c8b6"`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" DROP CONSTRAINT "FK_b7df6ac2696380024ac2102e0a0"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_9fc134ca20766e165ad650ee740"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a2895bf34469bbc938b8fc4760"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b7df6ac2696380024ac2102e0a"`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" DROP CONSTRAINT "PK_83f21fdafaff0e8fe06459aba52"`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" ADD CONSTRAINT "PK_b3af8cb0f9870267c0ffd962d41" PRIMARY KEY ("id_tema", "id_recurso", "id_ruta")`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" DROP CONSTRAINT "PK_2f0f60389b537aa81d1d70a780d"`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" ADD CONSTRAINT "PK_b3af8cb0f9870267c0ffd962d41" PRIMARY KEY ("id_tema", "id_recurso", "id_ruta")`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" DROP CONSTRAINT "PK_b3af8cb0f9870267c0ffd962d41"`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" ADD CONSTRAINT "PK_2f0f60389b537aa81d1d70a780d" PRIMARY KEY ("id_tema", "id_recurso")`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" DROP COLUMN "id_ruta"`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" DROP CONSTRAINT "PK_2f0f60389b537aa81d1d70a780d"`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" ADD CONSTRAINT "PK_6c4e148a15a27470ec663e3c8b6" PRIMARY KEY ("id_tema")`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" DROP COLUMN "id_recurso"`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" ADD "id_recurso" integer NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_b7df6ac2696380024ac2102e0a" ON "tema-ruta" ("id_recurso") `);
        await queryRunner.query(`ALTER TABLE "tema-ruta" DROP CONSTRAINT "PK_6c4e148a15a27470ec663e3c8b6"`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" ADD CONSTRAINT "PK_2f0f60389b537aa81d1d70a780d" PRIMARY KEY ("id_recurso", "id_tema")`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e73141fcc8519691e1188187e8"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a82fabffe58f7a5544127f5faf"`);
        await queryRunner.query(`DROP TABLE "inscripcion"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_13380e7efec83468d73fc37938"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_99b019339f52c63ae615358738"`);
        await queryRunner.query(`DROP TABLE "user_roles"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6c4e148a15a27470ec663e3c8b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b7df6ac2696380024ac2102e0a"`);
        await queryRunner.query(`DROP TABLE "tema-ruta"`);
        await queryRunner.query(`DROP TABLE "ruta"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "roles"`);
        await queryRunner.query(`DROP TABLE "user_details"`);
        await queryRunner.query(`DROP TABLE "tema"`);
        await queryRunner.query(`DROP TABLE "recurso"`);
    }

}
