import { Injectable } from '@angular/core';
import {LoggingService} from './logging.service';
import {Trainer} from '../trainers/trainer';

@Injectable()
export class TrainerService {

  constructor(
    private loggingService: LoggingService) {
  }
  // tslint:disable-next-line:typedef
  getTrainer() {
    let trainerList: Trainer[];
    trainerList = [
      new Trainer('/assets/images/Daniel.jpg', 'Daniel', 'Certified gym instructor. Master of Sports in powerlifting. Candidate for Master of Sports in bench press!'),
      new Trainer('/assets/images/John.jpg', 'John', 'Certified gym instructor. Master of Sports in powerlifting. Candidate for Master of Sports in bench press!'),
      new Trainer('/assets/images/Alex.jpg', 'Alex', 'Certified gym instructor. Master of Sports in powerlifting. Candidate for Master of Sports in bench press!'),
      new Trainer('/assets/images/Anne.jpg', 'Anne', 'Certified gym instructor. Master of Sports in powerlifting. Candidate for Master of Sports in bench press!'),
      new Trainer('/assets/images/Steven.jpg', 'Steven', 'Certified gym instructor. Master of Sports in powerlifting. Candidate for Master of Sports in bench press!'),
      ];

    this.loggingService.log('List of shared values: ' + trainerList);

    return trainerList;
  }
}
