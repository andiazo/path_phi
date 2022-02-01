import {MigrationInterface, QueryRunner} from "typeorm";

export class actualizacion31643754483106 implements MigrationInterface {
    name = 'actualizacion31643754483106'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ruta" DROP CONSTRAINT "FK_3e3e86bbb78e66e98c9894d7e47"`);
        await queryRunner.query(`ALTER TABLE "ruta" DROP COLUMN "commentsIdComment"`);
        await queryRunner.query(`ALTER TABLE "comentario" ADD "learningPathIdRuta" integer`);
        await queryRunner.query(`ALTER TABLE "comentario" ADD CONSTRAINT "FK_160115bda380ef7609c6a5404c0" FOREIGN KEY ("learningPathIdRuta") REFERENCES "ruta"("id_ruta") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comentario" DROP CONSTRAINT "FK_160115bda380ef7609c6a5404c0"`);
        await queryRunner.query(`ALTER TABLE "comentario" DROP COLUMN "learningPathIdRuta"`);
        await queryRunner.query(`ALTER TABLE "ruta" ADD "commentsIdComment" integer`);
        await queryRunner.query(`ALTER TABLE "ruta" ADD CONSTRAINT "FK_3e3e86bbb78e66e98c9894d7e47" FOREIGN KEY ("commentsIdComment") REFERENCES "comentario"("id_comment") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
