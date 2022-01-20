import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { Configuration } from './config/config.keys';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './modules/user/user.module';
import { RoleModule } from './modules/role/role.module';
import { AuthModule } from './modules/auth/auth.module';
import { LearningPathModule } from './modules/learning-path/learning-path.module';
import { TopicModule } from './modules/topic/topic.module';
import { ResourceModule } from './modules/resource/resource.module';

@Module({
  imports: [ConfigModule, DatabaseModule, UserModule, RoleModule, AuthModule, LearningPathModule, TopicModule, ResourceModule],
})
export class AppModule {
  static port: number | string;
  constructor(private readonly _configService: ConfigService) {
    AppModule.port = this._configService.get(Configuration.PORT);
  }
}
