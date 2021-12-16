import {MigrationInterface, QueryRunner} from "typeorm";

export class inscripciones1639619900305 implements MigrationInterface {
    name = 'inscripciones1639619900305'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "inscripcion" DROP CONSTRAINT "FK_a82fabffe58f7a5544127f5faf3"`);
        await queryRunner.query(`ALTER TABLE "inscripcion" DROP CONSTRAINT "FK_e73141fcc8519691e1188187e8e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a82fabffe58f7a5544127f5faf"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e73141fcc8519691e1188187e8"`);
        await queryRunner.query(`ALTER TABLE "inscripcion" DROP CONSTRAINT "PK_a030eec04a6cd64fe703cf6cabc"`);
        await queryRunner.query(`ALTER TABLE "inscripcion" ADD CONSTRAINT "PK_e73141fcc8519691e1188187e8e" PRIMARY KEY ("rutaIdRuta")`);
        await queryRunner.query(`ALTER TABLE "inscripcion" DROP COLUMN "usersId"`);
        await queryRunner.query(`ALTER TABLE "inscripcion" DROP CONSTRAINT "PK_e73141fcc8519691e1188187e8e"`);
        await queryRunner.query(`ALTER TABLE "inscripcion" DROP COLUMN "rutaIdRuta"`);
        await queryRunner.query(`ALTER TABLE "inscripcion" ADD "id_user" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "inscripcion" ADD CONSTRAINT "PK_ce41e0f679c68fdfe14d37caedf" PRIMARY KEY ("id_user")`);
        await queryRunner.query(`ALTER TABLE "inscripcion" ADD "id_ruta" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "inscripcion" DROP CONSTRAINT "PK_ce41e0f679c68fdfe14d37caedf"`);
        await queryRunner.query(`ALTER TABLE "inscripcion" ADD CONSTRAINT "PK_1fbba04d7b0326989afa229ec53" PRIMARY KEY ("id_user", "id_ruta")`);
        await queryRunner.query(`CREATE INDEX "IDX_ce41e0f679c68fdfe14d37caed" ON "inscripcion" ("id_user") `);
        await queryRunner.query(`CREATE INDEX "IDX_020ad7fe7ec21d9e9d9085afc3" ON "inscripcion" ("id_ruta") `);
        await queryRunner.query(`ALTER TABLE "inscripcion" ADD CONSTRAINT "FK_ce41e0f679c68fdfe14d37caedf" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "inscripcion" ADD CONSTRAINT "FK_020ad7fe7ec21d9e9d9085afc31" FOREIGN KEY ("id_ruta") REFERENCES "ruta"("id_ruta") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "inscripcion" DROP CONSTRAINT "FK_020ad7fe7ec21d9e9d9085afc31"`);
        await queryRunner.query(`ALTER TABLE "inscripcion" DROP CONSTRAINT "FK_ce41e0f679c68fdfe14d37caedf"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_020ad7fe7ec21d9e9d9085afc3"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ce41e0f679c68fdfe14d37caed"`);
        await queryRunner.query(`ALTER TABLE "inscripcion" DROP CONSTRAINT "PK_1fbba04d7b0326989afa229ec53"`);
        await queryRunner.query(`ALTER TABLE "inscripcion" ADD CONSTRAINT "PK_ce41e0f679c68fdfe14d37caedf" PRIMARY KEY ("id_user")`);
        await queryRunner.query(`ALTER TABLE "inscripcion" DROP COLUMN "id_ruta"`);
        await queryRunner.query(`ALTER TABLE "inscripcion" DROP CONSTRAINT "PK_ce41e0f679c68fdfe14d37caedf"`);
        await queryRunner.query(`ALTER TABLE "inscripcion" DROP COLUMN "id_user"`);
        await queryRunner.query(`ALTER TABLE "inscripcion" ADD "rutaIdRuta" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "inscripcion" ADD CONSTRAINT "PK_e73141fcc8519691e1188187e8e" PRIMARY KEY ("rutaIdRuta")`);
        await queryRunner.query(`ALTER TABLE "inscripcion" ADD "usersId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "inscripcion" DROP CONSTRAINT "PK_e73141fcc8519691e1188187e8e"`);
        await queryRunner.query(`ALTER TABLE "inscripcion" ADD CONSTRAINT "PK_a030eec04a6cd64fe703cf6cabc" PRIMARY KEY ("usersId", "rutaIdRuta")`);
        await queryRunner.query(`CREATE INDEX "IDX_e73141fcc8519691e1188187e8" ON "inscripcion" ("rutaIdRuta") `);
        await queryRunner.query(`CREATE INDEX "IDX_a82fabffe58f7a5544127f5faf" ON "inscripcion" ("usersId") `);
        await queryRunner.query(`ALTER TABLE "inscripcion" ADD CONSTRAINT "FK_e73141fcc8519691e1188187e8e" FOREIGN KEY ("rutaIdRuta") REFERENCES "ruta"("id_ruta") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "inscripcion" ADD CONSTRAINT "FK_a82fabffe58f7a5544127f5faf3" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
