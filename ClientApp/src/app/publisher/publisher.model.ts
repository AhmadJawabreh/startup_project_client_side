export class Publisher {

  public id: number;
  public address: string;
  public name: string;
  public phone: string;
  public email: string;
  constructor(
    id:number,
    name:string,
    address: string,
    phone: string,
    email: string
    ){
    this.id = id;
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.email = email;
  }
}
