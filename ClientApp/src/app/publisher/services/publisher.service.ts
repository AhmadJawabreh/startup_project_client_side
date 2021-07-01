import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from 'src/app/config/config';
import { Constants } from 'src/app/config/constants';
import { Service } from 'src/app/services/service';


@Injectable({ providedIn: 'root' })
export class PublisherService extends Service {
  constructor(HttpClient: HttpClient) {
    super(HttpClient, Config.PublisherAndAuthorHost + Constants.PUBLISHER);
  }
}
