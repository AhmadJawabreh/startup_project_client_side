import { Publisher } from './publisher.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class PublisherService {
  api: string = "https://localhost:44358/Publisher";
  //private httpHeaders: HttpHeaders;

  constructor(private httpClient: HttpClient) {
    //this.httpHeaders =  new HttpHeaders({ 'Accept': 'application/json','Content-Type': 'application/json' });
   }

  GetAll() {
    return this.httpClient.get(this.api);
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
