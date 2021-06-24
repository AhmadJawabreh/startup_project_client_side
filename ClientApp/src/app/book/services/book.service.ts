import { Filter } from './../../shared/filter';
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

  GetAll(filter: Filter): Observable<any> {
    return this.httpClient.get(this.endPoint + "?pageSize=" + filter.pageSize + "&&pageNumber=" +
      filter.pageNumber + "&&Publisher=" + filter.publihser + "&&authors=" + filter.authors);
  }
  getExtraBookDetails(filter: Filter, id: number): Observable<any> {
    return this.httpClient.get(this.endPoint + "ExtraDetails/" + id + "?Publisher=" + filter.publihser + "&&authors=" + filter.authors);
  }



}
