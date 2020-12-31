import {Component, Output, EventEmitter} from '@angular/core';
import {DayInterface} from '../../interfaces/dayInterface';
import {CalendarService} from '../../services/calendar.service';
import {HourMarkInterface} from '../../interfaces/hourMarkInterface';
import {LocalStorageService} from '../../services/local-storage.service';
import {CalendarUser} from '../../interfaces/userInterface';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent{
  public currentWeek: DayInterface[] = JSON.parse(this.calendar.getCalendar() as string);
  public hourMarks: Array<string> = this.calendar.hourMarksNames;
  public user: CalendarUser = this.userService.getUser();
  public openMealModal: boolean = false;
  public targetMark: HourMarkInterface = {name: 'No meals yet!'};
  public openView: boolean = false;
  public openDay: boolean = false;
  public dayToView: DayInterface | undefined;
  @Output() public openModal: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private calendar: CalendarService,
    private userService: LocalStorageService
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

  public closeDayView(): void{
    this.openDay = false;
  }

  public openDayView(day: DayInterface): void{
    this.openDay = true;
    this.dayToView = day;
  }

  public openThisView(): void{
    this.openView = !this.openView;

  }


}
