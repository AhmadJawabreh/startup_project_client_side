export class Publisher {

  public id: number;
  public firstName : string;
  public lastName: string;
  public streetNumber: string;
  public streetName: string;
  public city: string;
  public state: string;

  constructor(id:number,
    firstName:string,
    lastName: string,
    streetNumber: string,
    streetName: string,
    city: string,
    state: string){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.streetNumber = streetNumber;
    this.streetName = streetName;
    this.city = city;
    this.state = state;
  }
}
