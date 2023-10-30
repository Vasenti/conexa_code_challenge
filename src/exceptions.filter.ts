import { ArgumentsHost, HttpException } from '@nestjs/common';
import { ApiErrors, DomainError } from './core/errors';
import { Response } from 'express';

export class ExceptionsFilter implements ExceptionsFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    let status = 500;
    let res = {
      message: ApiErrors.UNKNOWN_API_ERROR.message,
      code: ApiErrors.UNKNOWN_API_ERROR.code,
    };
    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const aux = exception.getResponse();
      res =
        aux instanceof DomainError
          ? aux.toApiError()
          : this.httpStatuscodeToApiError(status);
    }
    if (exception instanceof DomainError) {
      res = exception.toApiError();
      status = exception.getStatus();
    }
    response.status(status).json(res);
  }

  private httpStatuscodeToApiError(status: any) {
    switch (status) {
      case 403:
        return ApiErrors.FORBIDDEN_RESOURCE;
      case 404:
        return ApiErrors.ROUTE_NOT_FOUND;
      case 502:
        return ApiErrors.UNKNOWN_API_ERROR;
      default:
        return ApiErrors.UNKNOWN_API_ERROR;
    }
  }
}
