export class Request{
  public name: string;
  public phoneNumber: string;
  public question: string;
  constructor(name: string, phoneNumber: string, question: string) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.question = question;
  }
}
