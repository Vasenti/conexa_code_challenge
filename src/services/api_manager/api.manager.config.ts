import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ApiManagerConfig {
  public baseEndpoint: string;

  constructor(private config: ConfigService) {
    this.baseEndpoint = this.config.get('BASE_API_ENDPOINT');
  }
}
