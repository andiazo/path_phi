"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstMigrationUsers1638821760935 = void 0;
class firstMigrationUsers1638821760935 {
    constructor() {
        this.name = 'firstMigrationUsers1638821760935';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "username" character varying(25) NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "status" character varying(8) NOT NULL DEFAULT 'ACTIVE', "created_at" TIMESTAMP NOT NULL, "updated_at" TIMESTAMP NOT NULL, CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "users"`);
    }
}
exports.firstMigrationUsers1638821760935 = firstMigrationUsers1638821760935;
//# sourceMappingURL=1638821760935-first_migration_users.js.map