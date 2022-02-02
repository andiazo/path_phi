"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const config_module_1 = require("../config/config.module");
const config_service_1 = require("../config/config.service");
const config_keys_1 = require("../config/config.keys");
exports.databaseProviders = [
    typeorm_1.TypeOrmModule.forRootAsync({
        imports: [config_module_1.ConfigModule],
        inject: [config_service_1.ConfigService],
        async useFactory(config) {
            return {
                type: 'postgres',
                host: config.get(config_keys_1.Configuration.HOST),
                username: config.get(config_keys_1.Configuration.USERNAME),
                port: 5444,
                database: config.get(config_keys_1.Configuration.DATABASE),
                password: config.get(config_keys_1.Configuration.PASSWORD),
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                migrations: [__dirname + '/migrations/*{.ts,.js}'],
            };
        }
    }),
];
//# sourceMappingURL=database.service.js.map