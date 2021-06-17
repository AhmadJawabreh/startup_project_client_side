import { PublisherModule } from '../publisher.module';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class PublisherService {
  api: string = "https://localhost:44358/Publisher";

  public  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept':'application/json'
    })
  };

  constructor(private httpClient: HttpClient) {
   }

  GetAll(pageSize: number, pageNumber: number) {
    return this.httpClient.get(this.api + "?pageSize=" + pageSize + "&&pageNumber="  + pageNumber);
  }

  Details(id: number): Observable<any> {
    return this.httpClient.get(this.api + "/" + id);
  }

  Create(publisher: PublisherModule): Observable<any> {
    return this.httpClient.post(this.api, publisher);
  }

  Update(publisher: PublisherModule): Observable<any> {
    return this.httpClient.put(this.api, publisher);
  }

  Delete(id: number):Observable<any> {
   return  this.httpClient.delete(this.api + "/" + id);
  }

}
