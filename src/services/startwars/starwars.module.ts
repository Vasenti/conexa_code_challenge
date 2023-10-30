import { Module } from '@nestjs/common';
import { StarwarsService } from './starwars.service';
import { ApiManagerModule } from '../api_manager/api.manager.module';

@Module({
  providers: [StarwarsService],
  imports: [ApiManagerModule],
  exports: [StarwarsService],
})
export class StarwarsModule {}
