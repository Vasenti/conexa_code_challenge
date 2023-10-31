import { HttpException } from '@nestjs/common';
import { ApiErrorDto } from './dto/api.error.dto';

export const ApiErrors = {
  FORBIDDEN_RESOURCE: {
    code: 1000,
    message: 'User is not authorized for this resource.',
  },
  ROUTE_NOT_FOUND: {
    code: 1001,
    message: 'The route cannot be found',
  },
  PAYLOAD_SIZE_EXCEEDED: {
    code: 1002,
    message: 'Payload size exceeded for this operation',
  },
  UNKNOWN_API_ERROR: {
    code: 1003,
    message: 'Something has failed.',
    status: 500,
  },
  INVALID_INPUT: {
    code: 1004,
    message: 'Invalid/Empty input',
  },
};

export const AuthenticationErrors = {
  USER_NOT_FOUND: {
    code: 2000,
    message: 'User not found.',
    status: 404,
  },
  AUTH_ERROR: {
    code: 2001,
    message: 'The provided email or password is invalid.',
    status: 400,
  },
};

export const FilmsErrors = {
  FILM_NOT_FOUND: {
    code: 3000,
    message: 'Film not found.',
    status: 404,
  },
  FAILED_CREATE_FILM: {
    code: 3001,
    message: 'Could not create a new film.',
    status: 400,
  },
  FILM_INPUT_NOT_FOUND: {
    code: 3002,
    message: 'Should pass film input.',
    status: 400,
  },
};

export const DomainErrors = {
  ...ApiErrors,
  ...AuthenticationErrors,
  ...FilmsErrors,
};

export interface IDomainError {
  code: number;
  message: string;
  extraInfo?: object;
  status?: number;
}

export class DomainError extends HttpException {
  constructor(private readonly domainError: IDomainError) {
    super(domainError.message, domainError.status || 400);
  }

  public toApiError(): ApiErrorDto {
    const { message, code, extraInfo } = this.domainError;
    return { message, code, extraInfo };
  }

  public static getError(
    errorCode: any,
    defaultError = DomainErrors.FORBIDDEN_RESOURCE,
  ): IDomainError {
    return DomainErrors[errorCode] || defaultError;
  }
}
