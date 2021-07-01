import { Filter } from './../shared/filter';
import { PublisherModel } from './../publisher/models/publisher.model';
import { BookModel } from './../book/models/book.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inject, Injectable } from '@angular/core';
import { Config } from '../config/config';
import { AuthorModule } from '../author/author.module';


@Injectable({ providedIn: 'root' })


export class Service {
  public endPoint: string = "";

  constructor(public httpClient: HttpClient, @Inject(String) private host: string,) {
    this.endPoint = this.host;
  }

  GetAll(filter: Filter) {
    return this.httpClient.get(this.endPoint + "?pageSize=" + filter.pageSize + "&&pageNumber=" + filter.pageNumber);
  }

  Details(id: any): Observable<any> {
    return this.httpClient.get(this.endPoint + id);
  }

  Create(publisher: BookModel | PublisherModel): Observable<any> {
    return this.httpClient.post(this.endPoint, publisher);
  }

  Update(publisher: any): Observable<any> {
    return this.httpClient.put(this.endPoint, publisher);
  }

  Delete(id: number): Observable<any> {
    return this.httpClient.delete(this.endPoint + id);
  }

}
