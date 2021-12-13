import {MigrationInterface, QueryRunner} from "typeorm";

export class lpEntityAdded1639374894921 implements MigrationInterface {
    name = 'lpEntityAdded1639374894921'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "ruta" ("id_ruta" SERIAL NOT NULL, "nombre_ruta" character varying(40) NOT NULL, "descripcion_ruta" character varying(150) NOT NULL, "dificultad" integer NOT NULL, "cantidad_temas" integer NOT NULL, "cantidad_recursos" integer NOT NULL, "status" character varying(8) NOT NULL DEFAULT 'ACTIVE', CONSTRAINT "UQ_1148dea49b9169bfb24d21502e9" UNIQUE ("nombre_ruta"), CONSTRAINT "UQ_8cb1c5f3085ae72b6222b15ecb7" UNIQUE ("descripcion_ruta"), CONSTRAINT "PK_26a5677b445ca25ad52aa2d8af5" PRIMARY KEY ("id_ruta"))`);
        await queryRunner.query(`CREATE TABLE "inscripcion" ("usersId" integer NOT NULL, "rutaIdRuta" integer NOT NULL, CONSTRAINT "PK_a030eec04a6cd64fe703cf6cabc" PRIMARY KEY ("usersId", "rutaIdRuta"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a82fabffe58f7a5544127f5faf" ON "inscripcion" ("usersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_e73141fcc8519691e1188187e8" ON "inscripcion" ("rutaIdRuta") `);
        await queryRunner.query(`ALTER TABLE "inscripcion" ADD CONSTRAINT "FK_a82fabffe58f7a5544127f5faf3" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "inscripcion" ADD CONSTRAINT "FK_e73141fcc8519691e1188187e8e" FOREIGN KEY ("rutaIdRuta") REFERENCES "ruta"("id_ruta") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "inscripcion" DROP CONSTRAINT "FK_e73141fcc8519691e1188187e8e"`);
        await queryRunner.query(`ALTER TABLE "inscripcion" DROP CONSTRAINT "FK_a82fabffe58f7a5544127f5faf3"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e73141fcc8519691e1188187e8"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a82fabffe58f7a5544127f5faf"`);
        await queryRunner.query(`DROP TABLE "inscripcion"`);
        await queryRunner.query(`DROP TABLE "ruta"`);
    }

}
