import { Service } from 'src/app/services/service';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/config/constants';
export class BookService extends Service {

  constructor(httpClient: HttpClient,){
    super(httpClient,Constants.BOOK);
  }

}
