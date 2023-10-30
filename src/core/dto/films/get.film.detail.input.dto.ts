import { ApiProperty } from '@nestjs/swagger';

export class GetFilmDetailInputDto {
  @ApiProperty({
    description: 'Get specific film detail',
    example: '',
  })
  readonly filmId: string;
}
