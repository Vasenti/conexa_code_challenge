import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { SuccessOutputDto } from '../core/dto/success.out.dto';
import { ApiErrorDto } from '../core/dto/api.error.dto';
import { PostRegisterInputDto } from '../core/dto/authentication/post.register.input.dto';
import { PostRegister } from '../core/use_cases/authentication/post.register';
import { PostLoginInputDto } from '../core/dto/authentication/post.login.input.dto';
import { PostLoginOutputDto } from '../core/dto/authentication/post.login.output';
import { PostLogin } from '../core/use_cases/authentication/post.login';

@ApiTags('authentication')
@Controller()
export class AuthenticationController {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(
    private readonly postRegisterUseCase: PostRegister,
    private readonly postLoginUseCase: PostLogin,
  ) {}

  @Post('/register')
  @ApiOperation({ summary: 'Register new user' })
  @ApiOkResponse({ type: SuccessOutputDto })
  @ApiBadRequestResponse({ type: ApiErrorDto })
  async register(
    @Body() body: PostRegisterInputDto,
  ): Promise<SuccessOutputDto> {
    return this.postRegisterUseCase.call(body);
  }

  @Post('/login')
  @ApiOperation({ summary: 'Login user and receive token' })
  @ApiOkResponse({ type: PostLoginInputDto })
  @ApiBadRequestResponse({ type: ApiErrorDto })
  async login(@Body() body: PostLoginInputDto): Promise<PostLoginOutputDto> {
    return this.postLoginUseCase.call(body);
  }
}
