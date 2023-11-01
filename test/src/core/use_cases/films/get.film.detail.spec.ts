import { Test } from '@nestjs/testing';
import { EntityService } from '../../../../../src/services/database/entity.service';
import { GetFilmDetail } from '../../../../../src/core/use_cases/films/get.film.detail';
import { FILM_DETAIL } from '../__fixtures__/film.detail.fixture';
import { DomainError, DomainErrors } from '../../../../../src/core/errors';
import { GetFilmDetailInputDto } from '../../../../../src/core/dto/films/get.film.detail.input.dto';

describe('GetFilmDetail', () => {
  let getFilmDetail: GetFilmDetail;
  let entityService: EntityService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        GetFilmDetail,
        {
          provide: EntityService,
          useValue: { findOne: () => FILM_DETAIL },
        },
      ],
    }).compile();

    getFilmDetail = module.get<GetFilmDetail>(GetFilmDetail);
    entityService = module.get<EntityService>(EntityService);
  });

  describe('call', () => {
    const filmDetailInput: GetFilmDetailInputDto = {
      filmId: '65403e24671013578a5c333c',
    };

    it('should throw error FILM_NOT_FOUND', async () => {
      jest.spyOn(entityService, 'findOne').mockResolvedValueOnce(null);
      await expect(getFilmDetail.call(filmDetailInput)).rejects.toThrowError(
        new DomainError(DomainErrors.FILM_NOT_FOUND),
      );
    });

    it('should return film detail', async () => {
      expect(await getFilmDetail.call(filmDetailInput)).not.toBeNull();
    });
  });
});
