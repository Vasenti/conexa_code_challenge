import { Module } from '@nestjs/common';
import { ApiManagerClient } from './api.manager.client';
import { ApiManagerConfig } from './api.manager.config';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [ApiManagerClient, ApiManagerConfig, ConfigService],
  exports: [ApiManagerClient, ApiManagerConfig, ConfigService],
})
export class ApiManagerModule {}
