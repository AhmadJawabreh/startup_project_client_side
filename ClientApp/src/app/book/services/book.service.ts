import { Observable } from 'rxjs';
import { Service } from 'src/app/services/service';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/config/constants';
import { Injectable } from '@angular/core';
import { BookFilter } from '../models/book.filter';


@Injectable({ providedIn: 'root' })
export class BookService extends Service {
  constructor(httpClient: HttpClient) {
    super(httpClient, Constants.BOOK);
  }

  getExtraBookDetails(bookFilter: any, id: number): Observable<any>{
    console.log(bookFilter);
    return this.httpClient.get(this.endPoint + "ExtraDetails/" +id + "?Publisher=" + bookFilter.publihser + "&&authors=" +  bookFilter.authors) ;

  }
}
