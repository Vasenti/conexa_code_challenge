import { ApiProperty } from '@nestjs/swagger';
import { FilmsOutputDto } from './films.output.dto';
import { Film } from '../../entities/film';

export class FilmDetailOutputDto extends FilmsOutputDto {
  @ApiProperty({
    description: 'Film producer',
    example: '',
  })
  producer: string;

  @ApiProperty({
    description: 'Film release date',
    example: '2022-10-10',
  })
  releaseDate: string;

  @ApiProperty({
    description: 'Film characters',
    example: ['Character1', 'Character 2'],
  })
  characters: Array<string>;

  @ApiProperty({
    description: 'Film planets',
    example: ['planet 1', 'planet 2'],
  })
  planets: Array<string>;

  @ApiProperty({
    description: 'Film vehicles',
    example: ['vehicle 1', 'vehicle 2'],
  })
  vehicles: Array<string>;

  @ApiProperty({
    description: 'Film starships',
    example: ['starship 1', 'starship 2'],
  })
  starships: Array<string>;

  @ApiProperty({
    description: 'Film species',
    example: ['specie 1', 'specie 2'],
  })
  species: Array<string>;
}

export const toFilmDetailOutput = (film: Film): FilmDetailOutputDto => {
  return {
    id: film._id,
    title: film.title,
    url: film.url,
    director: film.director,
    created: film.created,
    edited: film.edited,
    openingCrawl: film.openingCrawl,
    producer: film.producer,
    releaseDate: film.releaseDate,
    characters: film.characters,
    species: film.species,
    planets: film.planets,
    starships: film.starships,
    vehicles: film.vehicles,
  };
};
