import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class FilmUpdateInputDto {
  @ApiPropertyOptional({
    description: 'Film title',
    example: 'title',
  })
  title?: string;

  @ApiPropertyOptional({
    description: 'Film url',
    example: 'url',
  })
  url?: string;

  @ApiPropertyOptional({
    description: 'Film director',
    example: 'Robert',
  })
  director?: string;

  @ApiPropertyOptional({
    description: 'Film date created',
    example: '2022-10-20',
  })
  created?: string;

  @ApiPropertyOptional({
    description: 'Film date edited',
    example: '2022-10-20',
  })
  edited?: string;

  @ApiPropertyOptional({
    description: 'Film opening crawl',
    example: '2022-10-20',
  })
  openingCrawl?: string;

  @ApiPropertyOptional({
    description: 'Film producer',
    example: '',
  })
  producer?: string;

  @ApiPropertyOptional({
    description: 'Film release date',
    example: '2022-10-10',
  })
  releaseDate?: string;

  @ApiPropertyOptional({
    description: 'Film characters',
    example: ['Character1', 'Character 2'],
  })
  characters?: Array<string>;

  @ApiPropertyOptional({
    description: 'Film planets',
    example: ['planet 1', 'planet 2'],
  })
  planets?: Array<string>;

  @ApiPropertyOptional({
    description: 'Film vehicles',
    example: ['vehicle 1', 'vehicle 2'],
  })
  vehicles?: Array<string>;

  @ApiProperty({
    description: 'Film starships',
    example: ['starship 1', 'starship 2'],
  })
  starships?: Array<string>;

  @ApiProperty({
    description: 'Film species',
    example: ['specie 1', 'specie 2'],
  })
  species?: Array<string>;
}
