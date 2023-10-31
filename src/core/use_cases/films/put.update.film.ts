import { Injectable } from '@nestjs/common';
import { EntityService } from '../../../services/database/entity.service';
import { FilmUpdateInputDto } from '../../dto/films/film.update.input.dto';
import { Film } from '../../entities/film';
import { SuccessOutputDto } from '../../dto/success.out.dto';
import { GetFilmDetailInputDto } from '../../dto/films/get.film.detail.input.dto';

@Injectable()
export class PutUpdateFilm {
  constructor(private readonly entityService: EntityService) {}

  async call(
    param: GetFilmDetailInputDto,
    input: FilmUpdateInputDto,
  ): Promise<SuccessOutputDto> {
    await this.entityService.update(Film, param.filmId, input);

    return { success: true };
  }
}
