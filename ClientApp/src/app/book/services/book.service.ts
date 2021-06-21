import { Observable } from 'rxjs';
import { Service } from 'src/app/services/service';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/config/constants';
import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class BookService extends Service {
  constructor(httpClient: HttpClient) {
    super(httpClient, Constants.BOOK);
  }
}
