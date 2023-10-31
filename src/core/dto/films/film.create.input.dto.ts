import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class FilmCreateInputDto {
  @ApiProperty({
    description: 'Film title',
    example: 'title',
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Film url',
    example: 'url',
  })
  @IsNotEmpty()
  @IsString()
  url: string;

  @ApiProperty({
    description: 'Film director',
    example: 'Robert',
  })
  @IsNotEmpty()
  @IsString()
  director: string;

  @ApiProperty({
    description: 'Film date created',
    example: '2022-10-20',
  })
  @IsNotEmpty()
  @IsString()
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
  @IsNotEmpty()
  @IsString()
  openingCrawl: string;

  @ApiProperty({
    description: 'Film producer',
    example: '',
  })
  @IsNotEmpty()
  @IsString()
  producer: string;

  @ApiProperty({
    description: 'Film release date',
    example: '2022-10-10',
  })
  @IsNotEmpty()
  @IsString()
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
