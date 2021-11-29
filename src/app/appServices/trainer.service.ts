import { Injectable } from '@angular/core';
import {LoggingService} from './logging.service';
import {Trainer} from '../trainers/trainer';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TrainerService {
  response: any;
  trainerList: Trainer[] = [];
  constructor(
    private loggingService: LoggingService, private http: HttpClient) {
  }
  // tslint:disable-next-line:typedef
  getTrainer() {
    this.http.get('http://localhost:8087/trainers', {headers: {'Access-Control-Allow-Origin': '*'}})
      .subscribe((response) => {
        console.log(response);
        this.response = response;
        console.log(this.response[0].specialization);
        for (const trainer of this.response){
          this.trainerList.push(new Trainer(trainer.id, trainer.fullName, trainer.phoneNumber, trainer.specialization));
        }
        console.log(this.trainerList);
          });
    return this.trainerList;
  }
}
