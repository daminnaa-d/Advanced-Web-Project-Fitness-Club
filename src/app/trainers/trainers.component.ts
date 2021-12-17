import { Component, OnInit } from '@angular/core';
import {TrainerService} from '../appServices/trainer.service';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})
export class TrainersComponent implements OnInit {
  trainersList: any = this.trainerService.getTrainer();
  constructor(private trainerService: TrainerService) {
  }
  // tslint:disable-next-line:typedef
  getTrainer() {
    return this.trainersList;
  }
  ngOnInit(): void {
  }
}

