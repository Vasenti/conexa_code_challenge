import { ApiProperty } from '@nestjs/swagger';

export class SuccessOutputDto {
  @ApiProperty({ description: 'Operation success', example: true })
  success: boolean;
}
