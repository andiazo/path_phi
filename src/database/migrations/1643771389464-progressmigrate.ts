import {MigrationInterface, QueryRunner} from "typeorm";

export class progressmigrate1643771389464 implements MigrationInterface {
    name = 'progressmigrate1643771389464'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "avance" ("status" character varying(8) NOT NULL DEFAULT 'ACTIVE', "userId" integer NOT NULL, "learningPathIdRuta" integer NOT NULL, "topicIdTopic" integer NOT NULL, CONSTRAINT "PK_9e69c1edb6d9ec996acd5f47ad4" PRIMARY KEY ("userId", "learningPathIdRuta", "topicIdTopic"))`);
        await queryRunner.query(`ALTER TABLE "avance" ADD CONSTRAINT "FK_20dc4c6167ccf3a82175f5b0516" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "avance" ADD CONSTRAINT "FK_5ff40220093177e41950e3807b5" FOREIGN KEY ("learningPathIdRuta") REFERENCES "ruta"("id_ruta") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "avance" ADD CONSTRAINT "FK_6f73d9456c81baa2edc6bc5b04a" FOREIGN KEY ("topicIdTopic") REFERENCES "tema"("id_topic") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "avance" DROP CONSTRAINT "FK_6f73d9456c81baa2edc6bc5b04a"`);
        await queryRunner.query(`ALTER TABLE "avance" DROP CONSTRAINT "FK_5ff40220093177e41950e3807b5"`);
        await queryRunner.query(`ALTER TABLE "avance" DROP CONSTRAINT "FK_20dc4c6167ccf3a82175f5b0516"`);
        await queryRunner.query(`DROP TABLE "avance"`);
    }

}
