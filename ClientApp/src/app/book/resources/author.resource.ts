export class AuthorResource {
  public id: number;
  public name: string;
  public dateOfBirth: Date;
  public email: string;

  constructor(id: number, name: string, dateOfBirth: Date, email: string) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.dateOfBirth = dateOfBirth;
  }
}
