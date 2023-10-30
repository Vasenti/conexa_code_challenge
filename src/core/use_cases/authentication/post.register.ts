import { Injectable } from '@nestjs/common';
import { PostRegisterInputDto } from '../../dto/authentication/post.register.input.dto';
import { SuccessOutputDto } from '../../dto/success.out.dto';
import { EntityService } from '../../../services/database/entity.service';
import { User } from '../../entities/user';
import { genSalt, hash } from 'bcrypt';

@Injectable()
export class PostRegister {
  constructor(private readonly entityService: EntityService) {}
  async call(userInput: PostRegisterInputDto): Promise<SuccessOutputDto> {
    const salt = await genSalt(10);
    const password = await hash(userInput.password, salt);

    const userEntity = new User();
    userEntity.username = userInput.username;
    userEntity.name = userInput.name;
    userEntity.lastName = userInput.lastName;
    userEntity.email = userInput.email;
    userEntity.password = password;
    userEntity.role = userInput.role;

    try {
      await this.entityService.save(userEntity);
    } catch (e) {
      console.log(e);
    }
    return { success: true };
  }
}
