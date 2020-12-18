import { Injectable } from '@angular/core';
import {HourMarkInterface} from '../interfaces/hourMarkInterface';
import {MealInterface} from '../interfaces/mealInterface';
import {DayInterface} from '../interfaces/dayInterface';


@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  public dayNames: Array<string> = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  public hourMarksNames: Array <string> = ['8:00', '9:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];
  public hourMarks: HourMarkInterface[] = Array(11).fill(0).map((i, x) => ({name: this.hourMarksNames[x]}));
  public week: Array<object> = Array(7).fill(0).map((i, x) => ({ name: (this.dayNames[x]), hourMarks: this.hourMarks, calPerDay: 0}));
  public calendar: DayInterface[] = JSON.parse(this.getCalendar() as string);

  public constructor() { }

  public setCalendar(): void{
    if (localStorage.getItem('calendar') === null){
      localStorage.setItem('calendar', JSON.stringify(this.week));
    }
    else{
      localStorage.setItem('calendar', JSON.stringify(this.calendar));
    }
  }

  public getCalendar(): string | null{
    return localStorage.getItem('calendar');
  }

  public setMeal(form: MealInterface): void{
    const day: DayInterface = this.calendar.find((entry) => entry.name === form.day) as DayInterface;
    const time: HourMarkInterface = day.hourMarks.find((entry) => entry.name === form.time) as HourMarkInterface;
    time.meal = form;
    day.calPerDay = Number(day.calPerDay + form.calValue);
    localStorage.setItem('calendar', JSON.stringify(this.calendar));
  }

  public getMeal(day: DayInterface, mark: HourMarkInterface): HourMarkInterface{
      const TargetDay: DayInterface = this.calendar.find((entry) => entry.name === day.name) as DayInterface;
      return TargetDay.hourMarks.find((entry) => entry.name === mark.name) as HourMarkInterface;
  }
}
