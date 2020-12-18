import {Component, Output, EventEmitter} from '@angular/core';
import {DayInterface} from '../../interfaces/dayInterface';
import {CalendarService} from '../../services/calendar.service';
import {HourMarkInterface} from '../../interfaces/hourMarkInterface';

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
  public targetMark: HourMarkInterface = {name: 'No meals yet!'};
  public openView: boolean = false;
  @Output() public openModal: EventEmitter<string> = new EventEmitter<string>();

  public constructor(
    private calendar: CalendarService,
  ){}

  public getDay(day: DayInterface, hourMark: HourMarkInterface): void{
     this.targetMark = this.calendar.getMeal(day, hourMark);
     this.openThisView();
  }

  public openMeal(): void{
    this.openMealModal = !this.openMealModal;
    this.currentWeek = JSON.parse(this.calendar.getCalendar() as string);
  }

  public open(): void{
    this.openModal.emit();
  }

  public openThisView(): void{
    this.openView = !this.openView;
  }
}
