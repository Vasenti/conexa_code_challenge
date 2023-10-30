import { Injectable } from '@nestjs/common';
import { PostLoginInputDto } from '../core/dto/authentication/post.login.input.dto';
import { IAuthenticate } from './interfaces/user.interface';
import { EntityService } from '../services/database/entity.service';
import { User } from '../core/entities/user';
import { DomainError, DomainErrors } from '../core/errors';
import { sign } from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(private readonly entityService: EntityService) {}
  async authenticate(authDto: PostLoginInputDto): Promise<IAuthenticate> {
    const user = await this.entityService.find(User, {
      email: authDto.email,
    });

    if (!user[0]) throw new DomainError(DomainErrors.AUTH_ERROR);

    const token = sign({ ...user[0] }, process.env.JWT_SECRET_KEY);

    return { token, user };
  }
}
