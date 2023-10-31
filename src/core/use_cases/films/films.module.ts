import { Module } from '@nestjs/common';
import { StarwarsModule } from '../../../services/startwars/starwars.module';
import { GetAllApiFilms } from './get.all.api.films';
import { GetAllDatabaseFilms } from './get.all.database.films';
import { DatabaseModule } from '../../../services/database/database.module';
import { GetFilmDetail } from './get.film.detail';
import { PostCreateFilm } from './post.create.film';
import { PutUpdateFilm } from './put.update.film';
import { DeleteFilm } from './delete.film';

@Module({
  providers: [
    GetAllApiFilms,
    GetAllDatabaseFilms,
    GetFilmDetail,
    PostCreateFilm,
    PutUpdateFilm,
    DeleteFilm,
  ],
  imports: [StarwarsModule, DatabaseModule],
  exports: [
    GetAllApiFilms,
    GetAllDatabaseFilms,
    GetFilmDetail,
    PostCreateFilm,
    PutUpdateFilm,
    DeleteFilm,
  ],
})
export class FilmsModule {}
