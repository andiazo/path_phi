"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigService = void 0;
const fs = require("fs");
const dotenv_1 = require("dotenv");
class ConfigService {
    constructor() {
        const isDevelopmentEnv = process.env.NODE_ENV != 'production';
        if (isDevelopmentEnv) {
            const envFilePath = __dirname + '/../../.env';
            const existsPath = fs.existsSync(envFilePath);
            if (!existsPath) {
                console.log('.env file does not exist');
                process.exit(0);
            }
            this.envConfig = (0, dotenv_1.parse)(fs.readFileSync(envFilePath));
        }
        else {
            this.envConfig = {
                PORT: process.env.PORT,
            };
        }
    }
    get(key) {
        return this.envConfig[key];
    }
}
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map