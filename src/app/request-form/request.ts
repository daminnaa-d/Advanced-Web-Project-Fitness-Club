export class Request{
  public id: number;
  public amount: number;
  public userId: number;
  public valid: string;
  public subscriptionType: string;
  constructor(id: number, amount: number, userId: number, valid: string, subscriptionType: string) {
    this.id = id;
    this.amount = amount;
    this.userId = userId;
    this.valid = valid;
    this.subscriptionType = subscriptionType;
  }
}
