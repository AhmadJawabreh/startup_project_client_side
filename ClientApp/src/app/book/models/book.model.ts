export class BookModel {

  public id: number;
  public name: string;
  public releaseDate: string;
  public publisherId: number;
  public AuthoIds: Array<number>;

  constructor(id: number, name: string, releaseDate: string, publisherId: number, authorIds: Array<number>) {
    this.id = id;
    this.name = name;
    this.releaseDate = releaseDate;
    this.publisherId = publisherId;
    this.AuthoIds = authorIds;
  }
}
