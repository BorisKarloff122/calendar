import {Component, Input, Output, EventEmitter} from '@angular/core';
import {DayInterface} from '../../interfaces/dayInterface';
import {CalendarService} from '../../services/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent{
  public currentWeek: DayInterface[] = JSON.parse(this.calendar.getCalendar() as string);
  public hourMarks: Array <string> = ['8:00', '9:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];
  public day: DayInterface | undefined;
  public openMealModal: boolean = false;
  @Output() public openModal: EventEmitter<string> = new EventEmitter<string>();

  public constructor(
    private calendar: CalendarService,
  ){}

  public getDay(dayIndex: number, hourIndex: number): void{
    console.log(dayIndex, hourIndex);
  }

  public openMeal(): void{
    this.openMealModal = !this.openMealModal;
  }

  public open(): void{
    this.openModal.emit();
  }

}
