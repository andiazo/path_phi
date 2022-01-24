import {MigrationInterface, QueryRunner} from "typeorm";

export class topic1642291918646 implements MigrationInterface {
    name = 'topic1642291918646'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tema" ("id_toplic" SERIAL NOT NULL, "name_topic" character varying(40) NOT NULL, "description_topic" character varying(150) NOT NULL, CONSTRAINT "PK_8ed31e0ff6adea3385c80c3848a" PRIMARY KEY ("id_toplic"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tema"`);
    }

}
