import { Component, OnInit, Input } from '@angular/core';
import {DayInterface} from '../../interfaces/dayInterface';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  @Input() public currentWeek: DayInterface[] | undefined;
  public day: DayInterface | undefined;
  public hourMarks: Array <string> = ['8:00', '9:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];

  constructor() { }

  ngOnInit(): void {
  }

  public getDay(dayIndex: number, hourIndex: number): void{
    console.log(dayIndex, hourIndex);
  }
}
