export class BookFilter{
  publihser: boolean;
  authors: boolean;
  constructor(publisher: boolean, authors: boolean){
    this.authors = authors;
    this.publihser = publisher;
  }
}
