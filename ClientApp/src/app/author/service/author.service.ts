import { Config } from 'src/app/config/config';
import { Constants } from '../../config/constants';
import { HttpClient } from '@angular/common/http';
import { Service } from 'src/app/services/service';
import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class AuthorService extends Service {
  constructor(httpClient: HttpClient) {
    super(httpClient,Config.PublisherAndAuthorHost + Constants.AUTHOR);
  }
}
