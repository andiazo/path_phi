import {MigrationInterface, QueryRunner} from "typeorm";

export class topic1642294562106 implements MigrationInterface {
    name = 'topic1642294562106'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tema" RENAME COLUMN "id_toplic" TO "id_topic"`);
        await queryRunner.query(`ALTER TABLE "tema" RENAME CONSTRAINT "PK_8ed31e0ff6adea3385c80c3848a" TO "PK_070d83f830116c9742f8327df69"`);
        await queryRunner.query(`ALTER SEQUENCE "tema_id_toplic_seq" RENAME TO "tema_id_topic_seq"`);
        await queryRunner.query(`CREATE TABLE "tema-ruta" ("id_tema" integer NOT NULL, "id_ruta" integer NOT NULL, CONSTRAINT "PK_83f21fdafaff0e8fe06459aba52" PRIMARY KEY ("id_tema", "id_ruta"))`);
        await queryRunner.query(`CREATE INDEX "IDX_6c4e148a15a27470ec663e3c8b" ON "tema-ruta" ("id_tema") `);
        await queryRunner.query(`CREATE INDEX "IDX_a2895bf34469bbc938b8fc4760" ON "tema-ruta" ("id_ruta") `);
        await queryRunner.query(`ALTER TABLE "tema-ruta" ADD CONSTRAINT "FK_6c4e148a15a27470ec663e3c8b6" FOREIGN KEY ("id_tema") REFERENCES "tema"("id_topic") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" ADD CONSTRAINT "FK_a2895bf34469bbc938b8fc4760d" FOREIGN KEY ("id_ruta") REFERENCES "ruta"("id_ruta") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tema-ruta" DROP CONSTRAINT "FK_a2895bf34469bbc938b8fc4760d"`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" DROP CONSTRAINT "FK_6c4e148a15a27470ec663e3c8b6"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a2895bf34469bbc938b8fc4760"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6c4e148a15a27470ec663e3c8b"`);
        await queryRunner.query(`DROP TABLE "tema-ruta"`);
        await queryRunner.query(`ALTER SEQUENCE "tema_id_topic_seq" RENAME TO "tema_id_toplic_seq"`);
        await queryRunner.query(`ALTER TABLE "tema" RENAME CONSTRAINT "PK_070d83f830116c9742f8327df69" TO "PK_8ed31e0ff6adea3385c80c3848a"`);
        await queryRunner.query(`ALTER TABLE "tema" RENAME COLUMN "id_topic" TO "id_toplic"`);
    }

}
