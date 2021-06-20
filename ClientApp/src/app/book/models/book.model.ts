export class BookModel {

  public id: number;
  public name: string;
  public releaseDate: Date;

  constructor(id: number, name: string, releaseDate: Date) {
    this.id = id;
    this.name = name;
    this.releaseDate = releaseDate;
  }
}
