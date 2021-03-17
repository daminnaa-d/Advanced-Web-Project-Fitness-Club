export class Request{
  name: string;
  phoneNumber: string;
  guestion: string;
  constructor(name: string, phoneNumber: string, guestion: string) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.guestion = guestion;
  }
}
