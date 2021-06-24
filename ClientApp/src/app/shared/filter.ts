import { Pagination } from 'src/app/shared/pagination';
export class Filter extends Pagination{
  publihser: boolean;
  authors: boolean;
  constructor(publisher: boolean, authors: boolean, pageNumber: number, pageSize: number){
    super(pageNumber, pageSize);
    this.authors = authors;
    this.publihser = publisher;
  }
}
