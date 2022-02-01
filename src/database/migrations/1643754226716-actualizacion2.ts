import {MigrationInterface, QueryRunner} from "typeorm";

export class actualizacion21643754226716 implements MigrationInterface {
    name = 'actualizacion21643754226716'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ruta" DROP CONSTRAINT "FK_dda2ee930d00e38785156920124"`);
        await queryRunner.query(`ALTER TABLE "ruta" RENAME COLUMN "commentIdComment" TO "commentsIdComment"`);
        await queryRunner.query(`ALTER TABLE "ruta" ADD CONSTRAINT "FK_3e3e86bbb78e66e98c9894d7e47" FOREIGN KEY ("commentsIdComment") REFERENCES "comentario"("id_comment") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ruta" DROP CONSTRAINT "FK_3e3e86bbb78e66e98c9894d7e47"`);
        await queryRunner.query(`ALTER TABLE "ruta" RENAME COLUMN "commentsIdComment" TO "commentIdComment"`);
        await queryRunner.query(`ALTER TABLE "ruta" ADD CONSTRAINT "FK_dda2ee930d00e38785156920124" FOREIGN KEY ("commentIdComment") REFERENCES "comentario"("id_comment") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
