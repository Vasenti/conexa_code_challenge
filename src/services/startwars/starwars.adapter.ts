import { Film } from '../../core/entities/film';
import { IStarWarFilmResult } from './starwars.interface';

export const toFilmEntity = (data: IStarWarFilmResult): Film[] => {
  if (!data) return;

  const films: Film[] = data.results.map((starWarFilmApi) => {
    const film = new Film();
    film.title = starWarFilmApi.title;
    film.director = starWarFilmApi.director;
    film.created = starWarFilmApi.created;
    film.edited = starWarFilmApi.edited;
    film.openingCrawl = starWarFilmApi.opening_crawl;
    return film;
  });

  return films;
};
