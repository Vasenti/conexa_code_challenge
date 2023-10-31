import { Injectable } from '@nestjs/common';
import { EntityService } from '../../../services/database/entity.service';
import { FilmCreateInputDto } from '../../dto/films/film.create.input.dto';
import { Film } from '../../entities/film';
import { DomainError, DomainErrors } from '../../errors';
import { SuccessOutputDto } from '../../dto/success.out.dto';

@Injectable()
export class PostCreateFilm {
  constructor(private readonly entityService: EntityService) {}

  async call(input: FilmCreateInputDto): Promise<SuccessOutputDto> {
    if (!input) throw new DomainError(DomainErrors.FILM_INPUT_NOT_FOUND);

    const film = new Film();
    film.title = input.title;
    film.director = input.director;
    film.created = input.created;
    film.edited = input.edited;
    film.openingCrawl = input.openingCrawl;
    film.characters = input.characters;
    film.planets = input.planets;
    film.producer = input.producer;
    film.vehicles = input.vehicles;
    film.releaseDate = input.releaseDate;
    film.species = input.species;

    const result = await this.entityService.save(film);

    if (!result) throw new DomainError(DomainErrors.FAILED_CREATE_FILM);

    return { success: true };
  }
}
