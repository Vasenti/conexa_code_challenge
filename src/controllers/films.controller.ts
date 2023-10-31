import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ApiErrorDto } from '../core/dto/api.error.dto';
import { GetAllApiFilms } from '../core/use_cases/films/get.all.api.films';
import { FilmsOutputDto } from '../core/dto/films/films.output.dto';
import { Roles } from '../auth/roles.decorator';
import { Role } from '../auth/roles.enum';
import { RolesGuard } from '../auth/guards/roles.guard';
import { JwtAuthGuard } from '../auth/guards/jwt.auth.guard';
import { GetFilmDetailInputDto } from '../core/dto/films/get.film.detail.input.dto';
import { GetAllDatabaseFilms } from '../core/use_cases/films/get.all.database.films';
import { GetFilmDetail } from '../core/use_cases/films/get.film.detail';
import { FilmCreateInputDto } from '../core/dto/films/film.create.input.dto';
import { PostCreateFilm } from '../core/use_cases/films/post.create.film';
import { SuccessOutputDto } from '../core/dto/success.out.dto';
import { FilmDetailOutputDto } from '../core/dto/films/film.detail.output.dto';
import { FilmUpdateInputDto } from '../core/dto/films/film.update.input.dto';
import { PutUpdateFilm } from '../core/use_cases/films/put.update.film';
import { DeleteFilm } from '../core/use_cases/films/delete.film';

@ApiBearerAuth()
@ApiTags('films')
@Controller()
export class FilmsController {
  constructor(
    private readonly getAllApiFilmsUseCase: GetAllApiFilms,
    private readonly getAllDatabaseFilmsUseCase: GetAllDatabaseFilms,
    private readonly getFilmDetailUseCase: GetFilmDetail,
    private readonly postCreateFilmUseCase: PostCreateFilm,
    private readonly putUpdateFilmUseCase: PutUpdateFilm,
    private readonly deleteFilmUseCase: DeleteFilm,
  ) {}

  @Get('/films')
  @ApiOperation({ summary: 'Get All films from database' })
  @ApiOkResponse({ type: FilmsOutputDto, isArray: true })
  @ApiBadRequestResponse({ type: ApiErrorDto })
  getAllFilms(): Promise<FilmsOutputDto[]> {
    return this.getAllDatabaseFilmsUseCase.call();
  }

  @Get('/films/api')
  @ApiOperation({ summary: 'Get All films from StarWars API' })
  @ApiOkResponse({ type: FilmsOutputDto, isArray: true })
  @ApiBadRequestResponse({ type: ApiErrorDto })
  getAllFilmsFromApi(): Promise<FilmsOutputDto[]> {
    return this.getAllApiFilmsUseCase.call();
  }

  @Roles(Role.ROLE_2)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post('/film/new')
  @ApiOperation({ summary: 'Create new film' })
  @ApiOkResponse({ type: SuccessOutputDto })
  @ApiBadRequestResponse({ type: ApiErrorDto })
  addFilm(@Body() body: FilmCreateInputDto) {
    return this.postCreateFilmUseCase.call(body);
  }

  @Roles(Role.ROLE_1)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('/film/:filmId/detail')
  @ApiOperation({ summary: 'Get film detail from BBDD' })
  @ApiOkResponse({ type: FilmDetailOutputDto })
  @ApiBadRequestResponse({ type: ApiErrorDto })
  getFilmDetail(@Param() params: GetFilmDetailInputDto) {
    return this.getFilmDetailUseCase.call(params);
  }

  @Roles(Role.ROLE_2)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Put('/film/:filmId')
  @ApiOperation({ summary: 'Update film' })
  @ApiOkResponse({ type: SuccessOutputDto })
  @ApiBadRequestResponse({ type: ApiErrorDto })
  updateFilm(
    @Param() params: GetFilmDetailInputDto,
    @Body() body: FilmUpdateInputDto,
  ) {
    return this.putUpdateFilmUseCase.call(params, body);
  }

  @Roles(Role.ROLE_2)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete('/film/:filmId')
  @ApiOperation({ summary: 'Delete film' })
  @ApiOkResponse({ type: SuccessOutputDto })
  @ApiBadRequestResponse({ type: ApiErrorDto })
  deleteFilm(@Param() params: GetFilmDetailInputDto) {
    return this.deleteFilmUseCase.call(params);
  }
}
