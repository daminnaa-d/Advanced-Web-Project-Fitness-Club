import { Component, OnInit } from '@angular/core';
import {RequestService} from '../appServices/request.service';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {
  fullname = '';
  phonenumber = '';
  question = '';
  requestList = this.getRequest();
  constructor(private requestService: RequestService) { }

  // tslint:disable-next-line:typedef
  sendInfo(){
    this.requestService.addRequest(this.fullname, this.phonenumber, this.question);
    this.getRequest();
  }
  // tslint:disable-next-line:typedef
  getRequest(){
    return this.requestService.getRequest();
  }
  ngOnInit(): void {
  }

}
