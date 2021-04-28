import {Component, OnInit} from '@angular/core';
import {RequestService} from '../appServices/request.service';
import {Request} from './request';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {
  // @ts-ignore
  request = new Request();
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

  // tslint:disable-next-line:typedef
  canDeactivate() {
    return this.requestList.length > 0;
  }
  send(requestForm: NgForm): void{
    console.log(requestForm.form);
    console.log('Sent requests: ' + JSON.stringify(requestForm.value));
  }

  ngOnInit(): void {}
}
