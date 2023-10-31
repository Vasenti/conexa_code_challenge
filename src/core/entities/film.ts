import { ObjectId } from 'mongodb';
import { BaseEntity, Column, Entity, ObjectIdColumn } from 'typeorm';
import { FilmsOutputDto } from '../dto/films/films.output.dto';

@Entity()
export class Film extends BaseEntity {
  @ObjectIdColumn()
  _id: ObjectId;

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

  @Column()
  producer: string;

  @Column()
  releaseDate: string;

  @Column()
  characters: Array<string>;

  @Column()
  planets: Array<string>;

  @Column()
  starships: Array<string>;

  @Column()
  vehicles: Array<string>;

  @Column()
  species: Array<string>;
}
