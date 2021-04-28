import { Injectable } from '@angular/core';
import {Request} from '../request-form/request';


@Injectable()
export class RequestService {
  requestList: Request[] = [];
  constructor() {
  }
  // tslint:disable-next-line:typedef
  getRequest() {
    return this.requestList;
  }
  // tslint:disable-next-line:typedef
  addRequest(name: string, phoneNumber: string, question: string ){
    this.requestList.push(new Request(name, phoneNumber, question));
  }
}
