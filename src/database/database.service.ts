import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';
import { ConnectionOptions } from 'typeorm';
import { Configuration } from '../config/config.keys';
import { ParseIntPipe } from '@nestjs/common';
export const databaseProviders = [
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    async useFactory(config: ConfigService) {
      return {
        type: 'postgres' as 'postgres',
        host: config.get(Configuration.HOST),
        username: config.get(Configuration.USERNAME),
        port: 5432,
        database: config.get(Configuration.DATABASE),
        password: config.get(Configuration.PASSWORD),
        autoLoadEntities: true,
        synchronize: true,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        migrations: [__dirname + '/migrations/*{.ts,.js}'],
        //ssl: true,
        extra: { 
            trustServerCertificate: false,
            Encrypt: true,
            IntegratedSecurity: true,

            }
      } as ConnectionOptions
    }
  }),
];