export class AuthorResource {
  public id: number;
  public email: string;
  public name: string;
  public dateOfBirth: Date;

  constructor(id: number, name: string, email: string, dateOfBirth: Date) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.dateOfBirth = dateOfBirth;
  }

}
