import { ValidationPipe } from '@nestjs/common';
import { DomainError, DomainErrors } from './core/errors';

export const VALIDATION_PIPE_OPTIONS = {
  transform: true,
  validationError: { target: false },
  forbidUnknownValues: false,
  exceptionFactory: (errors) => {
    throw new DomainError({
      ...DomainErrors.INVALID_INPUT,
      extraInfo: errors[0],
    });
  },
};
export const vPipe = new ValidationPipe(VALIDATION_PIPE_OPTIONS);
