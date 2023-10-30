import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ApiErrorDto } from '../core/dto/api.error.dto';
import { GetAllFilms } from '../core/use_cases/films/get.all.films';
import { FilmsOutputDto } from '../core/dto/films/films.output.dto';
import { Roles } from '../auth/roles.decorator';
import { Role } from '../auth/roles.enum';
import { RolesGuard } from '../auth/guards/roles.guard';
import { JwtAuthGuard } from '../auth/guards/jwt.auth.guard';
import { GetFilmDetailInputDto } from '../core/dto/films/get.film.detail.input.dto';

@ApiTags('films')
@Controller()
export class FilmsController {
  constructor(private readonly getAllFilmsUseCase: GetAllFilms) {}

  @Get('/films')
  @ApiOperation({ summary: 'Get All films' })
  @ApiOkResponse({ type: FilmsOutputDto, isArray: true })
  @ApiBadRequestResponse({ type: ApiErrorDto })
  async getAllFilms(): Promise<FilmsOutputDto[]> {
    return await this.getAllFilmsUseCase.call();
  }

  @Roles(Role.ROLE_2)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post('/film/new')
  async addFilm(@Body() body: object) {
    return Promise.resolve(true);
  }

  @Roles(Role.ROLE_2)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('/film/:filmId/detail')
  async getFilmDetail(@Param() params: GetFilmDetailInputDto) {
    console.log(params);
    return Promise.resolve(true);
  }
}
