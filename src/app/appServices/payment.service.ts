import {Injectable} from '@angular/core';
import {SubType} from '../request-form/subType';
import {HttpClient} from '@angular/common/http';
import {Request} from '../request-form/request';

@Injectable()
export class PaymentService{
  orderList: Request[] = [];
  response: any;
  constructor(private http: HttpClient) {
  }
  // tslint:disable-next-line:typedef
  pay(request: Request){
    this.http.post('http://localhost:8085/orders/' + request.id, request, {headers: {'Access-Control-Allow-Origin': '*'}})
      .subscribe((response) => {
        console.log(response);
      });
    console.log('Done!');
  }
  // tslint:disable-next-line:typedef
  getOrderInfo(request: Request){
    this.http.get('http://localhost:8085/orders/' + request.id, {headers: {'Access-Control-Allow-Origin': '*'}})
      .subscribe((response) => {
        console.log(response);
        this.response = response;
        console.log(this.response[0].specialization);
        for (const order of this.response){
          this.orderList.push(new Request(order.id, order.amount, order.userId, order.valid, order.subscriptionType));
        }
        console.log(this.orderList);
      });
    return this.orderList;
  }
}
