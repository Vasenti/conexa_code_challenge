import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import stringify = require('fast-json-stable-stringify');
import { ApiErrors, IDomainError } from '../../core/errors';

export class ApiErrorDto {
  @ApiProperty({
    enum: Object.values(ApiErrors).map((e: IDomainError) => e.code),
  })
  code: number;

  @ApiProperty({
    enum: Object.values(ApiErrors).map(
      (e: IDomainError) => `[${e.code}] ${e.message}`,
    ),
  })
  message: string;

  @ApiPropertyOptional({
    enum: Object.values(ApiErrors)
      .filter((e: IDomainError) => e.extraInfo)
      .map((e: IDomainError) => `[${e.code}] ${stringify(e.extraInfo)}`),
  })
  extraInfo?: object;
}
