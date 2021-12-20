import { Component, OnInit } from '@angular/core';
import {Request} from '../request-form/request';
import {PaymentService} from '../appServices/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  // @ts-ignore
  request = new Request();
  orders: any = this.paymentService.getOrderInfo(this.request);
  constructor(public paymentService: PaymentService) { }
  // tslint:disable-next-line:typedef
  getRequest(){
    return this.paymentService.getOrderInfo(this.request);
  }
  // tslint:disable-next-line:typedef
  pay(request: Request){
    console.log(request);
    this.paymentService.pay(this.request);
  }
  ngOnInit(): void {
  }

}
