export class PublisherResource {

  public id: number;
  public address: string;
  public firstName: string;
  public lastName: string;
  public phone: string;
  public email: string;
  constructor(
    id:number,
    firstName:string,
    lastName:string,
    address: string,
    phone: string,
    email: string
    ){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.phone = phone;
    this.email = email;
  }
}
