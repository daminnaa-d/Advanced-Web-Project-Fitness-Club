import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-request-output',
  templateUrl: './request-output.component.html',
  styleUrls: ['./request-output.component.css']
})
export class RequestOutputComponent implements OnInit {
  @Input() fullname = '';
  @Input() phonenumber = '';
  @Input() question = '';
  constructor() { }

  ngOnInit(): void {
  }

}
