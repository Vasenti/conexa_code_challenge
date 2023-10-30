import { Module } from '@nestjs/common';
import { DatabaseConfig } from './database.config';
import { ConfigModule } from '@nestjs/config';
import { EntityService } from './entity.service';

@Module({
  imports: [DatabaseConfig.forRoot(), ConfigModule],
  providers: [EntityService],
  exports: [EntityService],
})
export class DatabaseModule {}
