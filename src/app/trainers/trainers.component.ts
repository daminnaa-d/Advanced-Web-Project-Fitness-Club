import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})
export class TrainersComponent implements OnInit {
  trainers = this.getTrainers();
  constructor() { }
  // tslint:disable-next-line:typedef
  getTrainers(){
    let trainerList: trainers[];
    trainerList = [
      new trainers('/assets/images/Daniel.jpg', 'Daniel', 'Certified gym instructor. Master of Sports in powerlifting. Candidate for Master of Sports in bench press!'),
      new trainers('/assets/images/John.jpg', 'John', 'Certified gym instructor. Master of Sports in powerlifting. Candidate for Master of Sports in bench press!'),
      new trainers('/assets/images/Alex.jpg', 'Alex', 'Certified gym instructor. Master of Sports in powerlifting. Candidate for Master of Sports in bench press!'),
      new trainers('/assets/images/Anne.jpg', 'Anne', 'Certified gym instructor. Master of Sports in powerlifting. Candidate for Master of Sports in bench press!'),
      new trainers('/assets/images/Steven.jpg', 'Steven', 'Certified gym instructor. Master of Sports in powerlifting. Candidate for Master of Sports in bench press!'),
      new trainers('https://top-star.kz/FitnesTopStar//media/trainer/8.jpg', 'Daniel', 'Certified gym instructor. Master of Sports in powerlifting. Candidate for Master of Sports in bench press!'),
      new trainers('https://top-star.kz/FitnesTopStar//media/trainer/8.jpg', 'Daniel', 'Certified gym instructor. Master of Sports in powerlifting. Candidate for Master of Sports in bench press!'),
      new trainers('https://top-star.kz/FitnesTopStar//media/trainer/8.jpg', 'Daniel', 'Certified gym instructor. Master of Sports in powerlifting. Candidate for Master of Sports in bench press!')
    ];
    return trainerList;
  }
  ngOnInit(): void {
  }
}

// tslint:disable-next-line:class-name
export class trainers {
  url: string;
  name: string;
  info: string;
  constructor(url: string, name: string, info: string) {
    this.url = url;
    this.name = name;
    this.info = info;
  }
}
