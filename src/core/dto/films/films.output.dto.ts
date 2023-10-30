import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class FilmsOutputDto {
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
