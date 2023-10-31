import { ApiProperty } from '@nestjs/swagger';
import { Film } from '../../entities/film';
import { ObjectId } from 'mongodb';

export class FilmsOutputDto {
  @ApiProperty({
    description: 'Film id',
    example: '1',
  })
  id: ObjectId;

  @ApiProperty({
    description: 'Film title',
    example: 'title',
  })
  title: string;

  @ApiProperty({
    description: 'Film url',
    example: 'url',
  })
  url: string;

  @ApiProperty({
    description: 'Film director',
    example: 'Robert',
  })
  director: string;

  @ApiProperty({
    description: 'Film date created',
    example: '2022-10-20',
  })
  created: string;

  @ApiProperty({
    description: 'Film date edited',
    example: '2022-10-20',
  })
  edited: string;

  @ApiProperty({
    description: 'Film opening crawl',
    example: '2022-10-20',
  })
  openingCrawl: string;
}

export const toFilmsOutput = (films: Film[]): FilmsOutputDto[] => {
  return films.map((film) => {
    return {
      id: film._id,
      title: film.title,
      url: film.url,
      director: film.director,
      created: film.created,
      edited: film.edited,
      openingCrawl: film.openingCrawl,
    };
  });
};
