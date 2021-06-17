export class PublisherModel {
  public id: number;
  public firstName: string;
  public lastName: string;
  public phone: string;
  public email: string;
  public address: string;
  constructor(
    id:number,
    firstName:string,
    lastName: string,
    phone: string,
    email: string,
    address:string
    ){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
    this.address = address
  }
}
