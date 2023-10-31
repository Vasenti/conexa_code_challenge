import { Injectable } from '@nestjs/common';
import { EntityService } from '../../../services/database/entity.service';
import { Film } from '../../entities/film';
import { DomainError, DomainErrors } from '../../errors';
import { toFilmsOutput } from '../../dto/films/films.output.dto';

@Injectable()
export class GetAllDatabaseFilms {
  constructor(private readonly entityService: EntityService) {}

  async call() {
    const films = await this.entityService.find(Film, {});

    if (!films) throw new DomainError(DomainErrors.FILM_NOT_FOUND);

    return toFilmsOutput(films);
  }
}
