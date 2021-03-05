import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  value = false;
  constructor() { }
  // tslint:disable-next-line:typedef
  toggle(){
    this.value = !this.value;
    return this.value;
  }
  ngOnInit(): void {
  }

}
