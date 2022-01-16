import {MigrationInterface, QueryRunner} from "typeorm";

export class uwu1642305053456 implements MigrationInterface {
    name = 'uwu1642305053456'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tema" ADD "status" character varying(8) NOT NULL DEFAULT 'ACTIVE'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tema" DROP COLUMN "status"`);
    }

}
