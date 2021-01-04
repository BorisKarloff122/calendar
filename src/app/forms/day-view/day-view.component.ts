import {Component, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import {DayInterface} from '../../interfaces/dayInterface';
import {LocalStorageService} from '../../services/local-storage.service';
import {CalendarUser} from '../../interfaces/userInterface';
import {CalendarService} from '../../services/calendar.service';
import {SubValues} from '../../interfaces/subValues';
import {MealInterface} from '../../interfaces/mealInterface';

@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.css']
})
export class DayViewComponent implements OnChanges{
  public user: CalendarUser = this.localStorage.getUser();
  public subValues!: SubValues;
  public meal!: MealInterface;
  @Input() public openDay!: boolean;
  @Output() public closeDayView: EventEmitter<string> = new EventEmitter<string>();
  @Input() public day!: DayInterface;
  constructor(
    private calendar: CalendarService,
    private localStorage: LocalStorageService
  ) { }

  ngOnChanges(): void {
      this.countSubValues(this.day);
  }

  public countSubValues(day: DayInterface): void{
    this.subValues = {
      carbs: 0,
      fats: 0,
      proteins: 0
    };

    day.hourMarks.forEach((i) => {
      if (i.meal){
        if (i.meal.carbs !== this.subValues.carbs / 2){
          this.subValues.carbs = this.subValues.carbs + i.meal.carbs;
        }
        if (i.meal.proteins !== this.subValues.proteins / 2){
          this.subValues.proteins = this.subValues.proteins + i.meal.proteins;
        }
        if (i.meal.fats !== this.subValues.fats / 2){
          this.subValues.fats = this.subValues.fats + i.meal.fats;
        }
      }
    });
  }

  public close(): void{
    this.openDay = false;
    this.closeDayView.emit();
    this.subValues = {fats: 0, carbs: 0, proteins: 0};
  }
}
