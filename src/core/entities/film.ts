import { ObjectId } from 'mongodb';
import { BaseEntity, Column, Entity, ObjectIdColumn } from 'typeorm';
import { FilmsOutputDto } from '../dto/films/films.output.dto';

@Entity()
export class Film extends BaseEntity {
  @ObjectIdColumn()
  id: ObjectId;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  url: string;

  @Column({ nullable: false })
  director: string;

  @Column({ nullable: false })
  created: string;

  @Column({ nullable: false })
  edited: string;

  @Column({ nullable: false })
  openingCrawl: string;
}

export const toFilmOutput = (films: Film[]): FilmsOutputDto[] => {
  return films.map((film): FilmsOutputDto => {
    return {
      title: film.title,
      director: film.director,
      created: film.created,
      edited: film.edited,
      openingCrawl: film.openingCrawl,
      url: film.url,
    };
  });
};
