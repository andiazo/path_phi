import {MigrationInterface, QueryRunner} from "typeorm";

export class recursoTema1642638944528 implements MigrationInterface {
    name = 'recursoTema1642638944528'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tema-ruta" DROP CONSTRAINT "FK_6c4e148a15a27470ec663e3c8b6"`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" DROP CONSTRAINT "FK_a2895bf34469bbc938b8fc4760d"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a2895bf34469bbc938b8fc4760"`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" RENAME COLUMN "id_ruta" TO "id_recurso"`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" RENAME CONSTRAINT "PK_83f21fdafaff0e8fe06459aba52" TO "PK_2f0f60389b537aa81d1d70a780d"`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" RENAME COLUMN "id_recurso" TO "id_ruta"`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" RENAME CONSTRAINT "PK_2f0f60389b537aa81d1d70a780d" TO "PK_83f21fdafaff0e8fe06459aba52"`);
        await queryRunner.query(`CREATE TABLE "recurso" ("id_recurso" SERIAL NOT NULL, "nombre_recurso" character varying(40) NOT NULL, "descripcion_recurso" character varying(150) NOT NULL, "enlace_recurso" character varying(150) NOT NULL, "status" character varying(8) NOT NULL DEFAULT 'ACTIVE', CONSTRAINT "UQ_84e99f10d0c781a4ac8e37b54cd" UNIQUE ("nombre_recurso"), CONSTRAINT "UQ_22e20b21cf59b3d33224ec1ecaa" UNIQUE ("descripcion_recurso"), CONSTRAINT "UQ_0311f799afbd97a2871073835e8" UNIQUE ("enlace_recurso"), CONSTRAINT "PK_512ccf11a581e24d6302261bfa2" PRIMARY KEY ("id_recurso"))`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" DROP CONSTRAINT "PK_83f21fdafaff0e8fe06459aba52"`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" ADD CONSTRAINT "PK_6c4e148a15a27470ec663e3c8b6" PRIMARY KEY ("id_tema")`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" DROP COLUMN "id_ruta"`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" ADD "id_recurso" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" DROP CONSTRAINT "PK_6c4e148a15a27470ec663e3c8b6"`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" ADD CONSTRAINT "PK_2f0f60389b537aa81d1d70a780d" PRIMARY KEY ("id_tema", "id_recurso")`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" ADD "id_ruta" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" DROP CONSTRAINT "PK_2f0f60389b537aa81d1d70a780d"`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" ADD CONSTRAINT "PK_b3af8cb0f9870267c0ffd962d41" PRIMARY KEY ("id_tema", "id_recurso", "id_ruta")`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" DROP CONSTRAINT "PK_b3af8cb0f9870267c0ffd962d41"`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" ADD CONSTRAINT "PK_2f0f60389b537aa81d1d70a780d" PRIMARY KEY ("id_recurso", "id_tema")`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" DROP CONSTRAINT IF EXISTS "PK_b3af8cb0f9870267c0ffd962d41"`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" ADD CONSTRAINT "PK_83f21fdafaff0e8fe06459aba52" PRIMARY KEY ("id_tema", "id_ruta")`);
        await queryRunner.query(`CREATE INDEX "IDX_b7df6ac2696380024ac2102e0a" ON "tema-ruta" ("id_recurso") `);
        await queryRunner.query(`CREATE INDEX "IDX_a2895bf34469bbc938b8fc4760" ON "tema-ruta" ("id_ruta") `);
        await queryRunner.query(`ALTER TABLE "tema-ruta" ADD CONSTRAINT "FK_b7df6ac2696380024ac2102e0a0" FOREIGN KEY ("id_recurso") REFERENCES "recurso"("id_recurso") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" ADD CONSTRAINT "FK_6c4e148a15a27470ec663e3c8b6" FOREIGN KEY ("id_tema") REFERENCES "tema"("id_topic") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" ADD CONSTRAINT "FK_a2895bf34469bbc938b8fc4760d" FOREIGN KEY ("id_ruta") REFERENCES "ruta"("id_ruta") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tema-ruta" DROP CONSTRAINT "FK_a2895bf34469bbc938b8fc4760d"`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" DROP CONSTRAINT "FK_6c4e148a15a27470ec663e3c8b6"`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" DROP CONSTRAINT "FK_b7df6ac2696380024ac2102e0a0"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a2895bf34469bbc938b8fc4760"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b7df6ac2696380024ac2102e0a"`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" DROP CONSTRAINT "PK_83f21fdafaff0e8fe06459aba52"`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" ADD CONSTRAINT "PK_b3af8cb0f9870267c0ffd962d41" PRIMARY KEY ("id_tema", "id_recurso", "id_ruta")`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" DROP CONSTRAINT "PK_2f0f60389b537aa81d1d70a780d"`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" ADD CONSTRAINT "PK_b3af8cb0f9870267c0ffd962d41" PRIMARY KEY ("id_tema", "id_recurso", "id_ruta")`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" DROP CONSTRAINT "PK_b3af8cb0f9870267c0ffd962d41"`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" ADD CONSTRAINT "PK_2f0f60389b537aa81d1d70a780d" PRIMARY KEY ("id_tema", "id_recurso")`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" DROP COLUMN "id_ruta"`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" DROP CONSTRAINT "PK_2f0f60389b537aa81d1d70a780d"`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" ADD CONSTRAINT "PK_6c4e148a15a27470ec663e3c8b6" PRIMARY KEY ("id_tema")`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" DROP COLUMN "id_recurso"`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" ADD "id_ruta" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" DROP CONSTRAINT "PK_6c4e148a15a27470ec663e3c8b6"`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" ADD CONSTRAINT "PK_83f21fdafaff0e8fe06459aba52" PRIMARY KEY ("id_tema", "id_ruta")`);
        await queryRunner.query(`DROP TABLE "recurso"`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" RENAME CONSTRAINT "PK_83f21fdafaff0e8fe06459aba52" TO "PK_2f0f60389b537aa81d1d70a780d"`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" RENAME COLUMN "id_ruta" TO "id_recurso"`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" RENAME CONSTRAINT "PK_2f0f60389b537aa81d1d70a780d" TO "PK_83f21fdafaff0e8fe06459aba52"`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" RENAME COLUMN "id_recurso" TO "id_ruta"`);
        await queryRunner.query(`CREATE INDEX "IDX_a2895bf34469bbc938b8fc4760" ON "tema-ruta" ("id_ruta") `);
        await queryRunner.query(`ALTER TABLE "tema-ruta" ADD CONSTRAINT "FK_a2895bf34469bbc938b8fc4760d" FOREIGN KEY ("id_ruta") REFERENCES "ruta"("id_ruta") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tema-ruta" ADD CONSTRAINT "FK_6c4e148a15a27470ec663e3c8b6" FOREIGN KEY ("id_tema") REFERENCES "tema"("id_topic") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
