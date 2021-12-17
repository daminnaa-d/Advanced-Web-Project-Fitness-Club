import { Component, OnInit } from '@angular/core';
import {ScheduleService} from '../appServices/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  schedules: any = this.scheduleService.getSchedule();
  constructor(private scheduleService: ScheduleService) {
  }
  // tslint:disable-next-line:typedef
  getSchedule() {
    return this.schedules;
  }
  ngOnInit(): void {
  }
}
