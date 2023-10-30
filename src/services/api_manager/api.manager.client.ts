import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import * as http from 'http';
import * as https from 'https';
import { ApiManagerConfig } from './api.manager.config';

const httpAgent = new http.Agent({ keepAlive: true });
const httpsAgent = new https.Agent({ keepAlive: true });

@Injectable()
export class ApiManagerClient {
  readonly axiosInstance = axios.create({ httpAgent, httpsAgent });

  constructor(private readonly config: ApiManagerConfig) {}

  public async get(url: string, params?: object) {
    const request = async () =>
      this.axiosInstance.get(`${this.config.baseEndpoint}${url}`, {
        timeout: 30000,
        params,
      });

    try {
      const response = await request();
      return response;
    } catch (e) {
      ApiManagerClient.handleError({ e, method: 'GET', url, params });
    }
  }

  private static handleError({
    e,
    method,
    url,
    body,
    params,
  }: {
    e;
    method: string;
    url: string;
    body?: object;
    params?: object;
  }) {
    throw e;
  }
}
