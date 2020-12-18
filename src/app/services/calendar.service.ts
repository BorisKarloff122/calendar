import { Injectable } from '@angular/core';
import {HourMarkInterface} from '../interfaces/hourMarkInterface';
import {MealInterface} from '../interfaces/mealInterface';


@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  public dayNames: Array<string> = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  public hourMarks: HourMarkInterface[] = Array(11).fill(0).map(() => ({}));
  public week: Array<object> = Array(7).fill(0).map((i, x) => ({ name: (this.dayNames[x]), hourMarks: this.hourMarks, calPerDay: 0}));

  public constructor() { }

  public setCalendar(): void{
    localStorage.setItem('calendar', JSON.stringify(this.week));
  }

  public getCalendar(): string | null{
    return localStorage.getItem('calendar');
  }

  public setMeal(form: MealInterface): void{
    const timeVal = form.time;
    const dayVal = form.day;

  }
}
