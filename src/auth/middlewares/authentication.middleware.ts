import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { NextFunction } from 'express';
import { Response } from 'express';
import { Request } from 'express';

@Injectable()
export class AuthenticationMiddleware {
  private readonly jwtService: JwtService;
  constructor() {
    this.jwtService = new JwtService({ secret: process.env.JWT_SECRET_KEY });
  }

  async use(req: Request, res: Response, next: NextFunction) {
    const token =
      req.headers.authorization && typeof req.headers.authorization === 'string'
        ? req.headers.authorization
        : undefined;

    if (!token) return res.status(401).end();

    try {
      await this.jwtService.verify(token.split(' ')[1], {
        secret: process.env.JWT_SECRET_KEY,
      });
      next();
    } catch (error) {
      return res.status(401).end();
    }
  }
}
