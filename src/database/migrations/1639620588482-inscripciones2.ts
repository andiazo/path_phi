import {MigrationInterface, QueryRunner} from "typeorm";

export class inscripciones21639620588482 implements MigrationInterface {
    name = 'inscripciones21639620588482'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "inscripcion" DROP CONSTRAINT "FK_020ad7fe7ec21d9e9d9085afc31"`);
        await queryRunner.query(`ALTER TABLE "inscripcion" ADD CONSTRAINT "FK_020ad7fe7ec21d9e9d9085afc31" FOREIGN KEY ("id_ruta") REFERENCES "ruta"("id_ruta") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "inscripcion" DROP CONSTRAINT "FK_020ad7fe7ec21d9e9d9085afc31"`);
        await queryRunner.query(`ALTER TABLE "inscripcion" ADD CONSTRAINT "FK_020ad7fe7ec21d9e9d9085afc31" FOREIGN KEY ("id_ruta") REFERENCES "ruta"("id_ruta") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
