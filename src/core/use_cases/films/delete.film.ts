import { Injectable } from '@nestjs/common';
import { EntityService } from '../../../services/database/entity.service';
import { GetFilmDetailInputDto } from '../../dto/films/get.film.detail.input.dto';
import { Film } from '../../entities/film';
import { ObjectId } from 'mongodb';
import { DomainError, DomainErrors } from '../../errors';
import { SuccessOutputDto } from '../../dto/success.out.dto';

@Injectable()
export class DeleteFilm {
  constructor(private readonly entityService: EntityService) {}

  async call(input: GetFilmDetailInputDto): Promise<SuccessOutputDto> {
    const film = await this.entityService.findOne(Film, {
      _id: new ObjectId(input.filmId),
    });

    if (!film) throw new DomainError(DomainErrors.FILM_NOT_FOUND);

    await this.entityService.remove(film);

    return { success: true };
  }
}
