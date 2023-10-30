import { Module } from '@nestjs/common';
import { StarwarsModule } from '../../../services/startwars/starwars.module';
import { GetAllFilms } from './get.all.films';

@Module({
  providers: [GetAllFilms],
  imports: [StarwarsModule],
  exports: [GetAllFilms],
})
export class FilmsModule {}
