export class BookModel {

  public id: number;
  public name: string;
  public releaseDate: Date;
  public publisherId: number;
  public authorIds: Array<number>;

  constructor(id: number, name: string, releaseDate: Date, publisherId: number, authorIds: Array<number>) {
    this.id = id;
    this.name = name;
    this.releaseDate = releaseDate;
    this.publisherId = publisherId;
    this.authorIds = authorIds;
  }
}
