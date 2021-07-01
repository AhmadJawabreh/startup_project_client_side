import { Config } from './../../config/config';
import { Filter } from './../../shared/filter';
import { Observable } from 'rxjs';
import { Service } from 'src/app/services/service';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/config/constants';
import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class BookService extends Service {
  constructor(httpClient: HttpClient) {
    super(httpClient, Config.BookHost+ Constants.BOOK);
  }

  GetAll(filter: Filter): Observable<any> {
    return this.httpClient.get(this.endPoint + "?pageSize=" + filter.pageSize + "&&pageNumber=" +
      filter.pageNumber + "&&Publisher=" + filter.publihser + "&&authors=" + filter.authors);
  }
}
