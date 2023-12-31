import { Injectable } from '@nestjs/common';
import { EntityService } from '../../../services/database/entity.service';
import { GetFilmDetailInputDto } from '../../dto/films/get.film.detail.input.dto';
import { Film } from '../../entities/film';
import { ObjectId } from 'mongodb';
import { DomainError, DomainErrors } from '../../errors';
import { toFilmDetailOutput } from '../../dto/films/film.detail.output.dto';

@Injectable()
export class GetFilmDetail {
  constructor(private readonly entityService: EntityService) {}

  async call(input: GetFilmDetailInputDto) {
    const detail = await this.entityService.findOne(Film, {
      _id: new ObjectId(input.filmId),
    });

    if (!detail) throw new DomainError(DomainErrors.FILM_NOT_FOUND);

    return toFilmDetailOutput(detail);
  }
}
