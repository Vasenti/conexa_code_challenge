import { ApiProperty } from '@nestjs/swagger';

export class PostLoginOutputDto {
  @ApiProperty({
    description: 'Token',
    example: 'token1',
  })
  token: string;
}
