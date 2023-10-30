import { Injectable } from '@nestjs/common';
import { StarwarsService } from '../../../services/startwars/starwars.service';
import { toFilmOutput } from '../../entities/film';
import { DomainError, DomainErrors } from '../../errors';

@Injectable()
export class GetAllFilms {
  constructor(private readonly starwarsService: StarwarsService) {}

  async call() {
    const films = await this.starwarsService.getFilms();

    if (!films) throw new DomainError(DomainErrors.FILM_NOT_FOUND);

    return toFilmOutput(films);
  }
}
