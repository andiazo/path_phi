"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixNameDetail1638834783554 = void 0;
class fixNameDetail1638834783554 {
    constructor() {
        this.name = 'fixNameDetail1638834783554';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_details" ALTER COLUMN "name" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_details" ALTER COLUMN "created_at" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_details" ALTER COLUMN "updated_at" DROP NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_details" ALTER COLUMN "updated_at" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_details" ALTER COLUMN "created_at" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_details" ALTER COLUMN "name" SET NOT NULL`);
    }
}
exports.fixNameDetail1638834783554 = fixNameDetail1638834783554;
//# sourceMappingURL=1638834783554-fix_name_detail.js.map