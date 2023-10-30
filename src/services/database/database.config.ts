import { DynamicModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

export class DatabaseConfig {
  static forRoot(): DynamicModule {
    return TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          type: 'mongodb',
          url: process.env.MONGODB_URL,
          entities: [join(__dirname, '../../core/entities/*{.ts,.js}')],
          synchronize: true,
          useNewUrlParser: true,
          logging: true,
        };
      },
    });
  }
}
