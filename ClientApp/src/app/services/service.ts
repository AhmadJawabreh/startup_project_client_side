import { Pagination } from './../shared/pagination';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inject, Injectable } from '@angular/core';
import { Config } from '../config/config';


@Injectable({ providedIn: 'root' })
export class Service {
  private endPoint: string = "";

  constructor(private httpClient: HttpClient,@Inject(String) private serviceName: string,) {
    this.endPoint = Config.HOST + this.serviceName;
  }

  GetAll(pagination: Pagination) {
    return this.httpClient.get(this.endPoint + "?pageSize=" + pagination.pageSize + "&&pageNumber=" + pagination.pageNumber);
  }

  Details(id: number): Observable<any> {
    return this.httpClient.get(this.endPoint + "/" + id);
  }

  Create(publisher: any): Observable<any> {
    return this.httpClient.post(this.endPoint, publisher);
  }

  Update(publisher: any): Observable<any> {
    return this.httpClient.put(this.endPoint, publisher);
  }

  Delete(id: number): Observable<any> {
    return this.httpClient.delete(this.endPoint + "/" + id);
  }

}
