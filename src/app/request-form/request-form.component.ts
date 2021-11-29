import {Component, OnInit} from '@angular/core';
import {RequestService} from '../appServices/request.service';
import {Request} from './request';
import {HttpClient} from '@angular/common/http';

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
  requests: any;
  msgTrue = false;
  constructor(public requestService: RequestService, private http: HttpClient) { }

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
  // tslint:disable-next-line:typedef
  createRequest(data: { id: any; name: any; phoneNumber: any; question: any; }){
    return this.http.post('http://localhost:3000/requests', data);
  }
  // tslint:disable-next-line:typedef
  addNewRequest(form: { value: { id: any; name: any; phoneNumber: any; question: any; }; }){
    const newData = { id: form.value.id, name: form.value.name, phoneNumber: form.value.phoneNumber, question: form.value.question};
    this.createRequest(newData).subscribe(data => {
    console.log(data);
    this.msgTrue = true;
  });
  }
  // tslint:disable-next-line:typedef
  getRequests(){
    return this.http.get('http://localhost:3000/requests');
  }
  showRequests(): void{
    this.requests = this.getRequests().subscribe(data => {
      this.requests = data;
    });
  }
  ngOnInit(): void {
  }
}
