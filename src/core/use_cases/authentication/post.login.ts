import { Injectable } from '@nestjs/common';
import { EntityService } from '../../../services/database/entity.service';
import { PostLoginInputDto } from '../../dto/authentication/post.login.input.dto';
import { User } from '../../entities/user';
import { DomainError, DomainErrors } from '../../errors';
import { compare } from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class PostLogin {
  constructor(private readonly entityService: EntityService) {}

  async call(userData: PostLoginInputDto) {
    const user: User = await this.entityService.find(User, {
      email: userData.email,
    });

    if (!user[0]) throw new DomainError(DomainErrors.USER_NOT_FOUND);

    const validPassword = await compare(userData.password, user[0].password);
    if (!validPassword) throw new DomainError(DomainErrors.AUTH_ERROR);

    const token = jwt.sign(userData, process.env.JWT_SECRET_KEY);

    return { token: token };
  }
}
