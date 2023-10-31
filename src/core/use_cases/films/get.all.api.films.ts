import { Injectable } from '@nestjs/common';
import { StarwarsService } from '../../../services/startwars/starwars.service';
import { DomainError, DomainErrors } from '../../errors';
import { toFilmsOutput } from '../../dto/films/films.output.dto';

@Injectable()
export class GetAllApiFilms {
  constructor(private readonly starwarsService: StarwarsService) {}

  async call() {
    const films = await this.starwarsService.getFilms();

    if (!films) throw new DomainError(DomainErrors.FILM_NOT_FOUND);

    return toFilmsOutput(films);
  }
}
