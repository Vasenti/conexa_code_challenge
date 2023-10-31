import { Test } from '@nestjs/testing';
import { GetAllFilms } from '../../../../../src/core/use_cases/films/get.all.api.films';
import { StarwarsService } from '../../../../../src/services/startwars/starwars.service';
import { FILMS } from '../__fixtures__/films.fixture';
import { FilmsOutputDto } from '../../../../../src/core/dto/films/films.output.dto';
import { DomainError, DomainErrors } from '../../../../../src/core/errors';

describe('GetAllFilms', () => {
  let getAllFilms: GetAllFilms;
  let starWarsService: StarwarsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        GetAllFilms,
        {
          provide: StarwarsService,
          useValue: { getFilms: () => FILMS },
        },
      ],
    }).compile();

    getAllFilms = module.get<GetAllFilms>(GetAllFilms);
    starWarsService = module.get<StarwarsService>(StarwarsService);
  });

  describe('call', () => {
    it('should call and get all films correctly', async () => {
      const result: FilmsOutputDto[] = await getAllFilms.call();
      expect(result.length).toBeGreaterThan(0);
    });

    it('should throw error FILM_NOT_FOUND', async () => {
      jest.spyOn(starWarsService, 'getFilms').mockResolvedValueOnce([]);

      await expect(getAllFilms.call()).rejects.toThrowError(
        new DomainError(DomainErrors.FILM_NOT_FOUND),
      );
    });
  });
});
