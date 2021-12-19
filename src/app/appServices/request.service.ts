import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SubType} from '../request-form/subType';
import {Request} from '../request-form/request';


@Injectable()
export class RequestService {
  requestList: SubType[] = [];
  response: any;
  constructor(private http: HttpClient) {
  }
  // tslint:disable-next-line:typedef
  sendRequest(request: Request){
    this.http.post('http://localhost:8085/orders', request, {headers: {'Access-Control-Allow-Origin': '*'}})
      .subscribe((response) => {
        console.log(response);
      });
    console.log('Done!');
  }
  // tslint:disable-next-line:typedef
  getSubscriptionType(){
    this.http.get('http://localhost:8085/subs', {headers: {'Access-Control-Allow-Origin': '*'}})
      .subscribe((response) => {
        console.log(response);
        this.response = response;
        console.log(this.response[0].specialization);
        for (const subType of this.response){
          this.requestList.push(new SubType(subType.id, subType.name, subType.price));
        }
        console.log(this.requestList);
      });
    return this.requestList;
  }
}
