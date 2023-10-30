import { AxiosResponse } from 'axios';
import { ApiManagerClient } from '../api_manager/api.manager.client';
import { IStarWarFilmResult } from './starwars.interface';
import { toFilmEntity } from './starwars.adapter';
import { Injectable } from '@nestjs/common';

const FILMS_PATH = '/films';

@Injectable()
export class StarwarsService {
  constructor(private readonly apiManagerClient: ApiManagerClient) {}

  public async getFilms() {
    try {
      const { data }: AxiosResponse<IStarWarFilmResult> =
        await this.apiManagerClient.get(FILMS_PATH);
      console.log(data);
      return toFilmEntity(data);
    } catch (error) {
      console.log(error);
    }
  }
}
