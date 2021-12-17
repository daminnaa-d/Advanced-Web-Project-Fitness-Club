export class Schedule {
  id: number;
  name: string;
  start: string;
  end: string;
  weekday: string;
  constructor(id: number, name: string, start: string, end: string, weekday: string) {
    this.id = id;
    this.name = name;
    this.start = start;
    this.end = end;
    this.weekday = weekday;
  }
}
