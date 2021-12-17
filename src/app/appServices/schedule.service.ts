import {Schedule} from '../schedule/schedule';
import {LoggingService} from './logging.service';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class ScheduleService {
  response: any;
  schedule: Schedule[] = [];
  constructor(
    private loggingService: LoggingService, private http: HttpClient) {
  }
  // tslint:disable-next-line:typedef
  getSchedule() {
    this.schedule = [];
    this.http.get('http://localhost:8082/schedule', {headers: {'Access-Control-Allow-Origin': '*'}})
      .subscribe((response) => {
        console.log(response);
        this.response = response;
        console.log(this.response[0].specialization);
        for (const schedule of this.response) {
          this.schedule.push(new Schedule(schedule.id, schedule.name, schedule.timeStart, schedule.timeEnd, schedule.dayOfWeek));
        }
        console.log(this.schedule);
      });
    return this.schedule;
  }
}
