import {Component, OnInit} from '@angular/core';
import {RequestService} from '../appServices/request.service';
import {Request} from './request';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {
  // @ts-ignore
  request = new Request();
  subTypes: any = this.requestService.getSubscriptionType();
  constructor(public requestService: RequestService) { }
  // tslint:disable-next-line:typedef
  getRequest(){
    return this.requestService.getSubscriptionType();
  }
  // tslint:disable-next-line:typedef
  sendRequest(request: Request){
    console.log(request);
    request.id = 1;
    request.valid = true;
    this.requestService.sendRequest(this.request);
  }
  ngOnInit(): void {
  }
}
