import { Publisher } from './publisher.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class PublisherService {
  api: string = "https://localhost:44358/Publisher";

  constructor(private httpClient: HttpClient) {
   }

  GetAll(pageSize: number, pageNumber: number) {
    return this.httpClient.get(this.api + "?pageSize=" + pageSize + "&&pageNumber="  + pageNumber);
  }

  Details(id: number): Observable<any> {
    return this.httpClient.get(this.api + "/" + id);
  }

  Create(publisher: Publisher): Observable<any> {
    return this.httpClient.post(this.api, publisher);
  }

  Update(publisher: Publisher): Observable<any> {
    return this.httpClient.put(this.api, publisher);
  }

  Delete(id: number) {
    this.httpClient.delete(this.api + "/" + id);
  }

}
