import { Module } from '@nestjs/common';
import { PostRegister } from './post.register';
import { DatabaseModule } from '../../../services/database/database.module';
import { PostLogin } from './post.login';

@Module({
  providers: [PostRegister, PostLogin],
  imports: [DatabaseModule],
  exports: [PostRegister, PostLogin],
})
export class AuthenticationModule {}
