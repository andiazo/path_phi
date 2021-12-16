import {MigrationInterface, QueryRunner} from "typeorm";

export class inscripciones21639620811651 implements MigrationInterface {
    name = 'inscripciones21639620811651'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "inscripcion" DROP CONSTRAINT "FK_ce41e0f679c68fdfe14d37caedf"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ce41e0f679c68fdfe14d37caed"`);
        await queryRunner.query(`ALTER TABLE "inscripcion" RENAME COLUMN "id_user" TO "user_id"`);
        await queryRunner.query(`ALTER TABLE "inscripcion" RENAME CONSTRAINT "PK_1fbba04d7b0326989afa229ec53" TO "PK_3adbc44cf0e4ba8d3cf25f7e505"`);
        await queryRunner.query(`CREATE INDEX "IDX_51f961c7e23a687612f30af1d9" ON "inscripcion" ("user_id") `);
        await queryRunner.query(`ALTER TABLE "inscripcion" ADD CONSTRAINT "FK_51f961c7e23a687612f30af1d9e" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "inscripcion" DROP CONSTRAINT "FK_51f961c7e23a687612f30af1d9e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_51f961c7e23a687612f30af1d9"`);
        await queryRunner.query(`ALTER TABLE "inscripcion" RENAME CONSTRAINT "PK_3adbc44cf0e4ba8d3cf25f7e505" TO "PK_1fbba04d7b0326989afa229ec53"`);
        await queryRunner.query(`ALTER TABLE "inscripcion" RENAME COLUMN "user_id" TO "id_user"`);
        await queryRunner.query(`CREATE INDEX "IDX_ce41e0f679c68fdfe14d37caed" ON "inscripcion" ("id_user") `);
        await queryRunner.query(`ALTER TABLE "inscripcion" ADD CONSTRAINT "FK_ce41e0f679c68fdfe14d37caedf" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
