import {Component} from '@angular/core';
import {LocalStorageService} from '../../services/local-storage.service';
import {CalendarUser} from '../../interfaces/userInterface';
import {DayInterface} from '../../interfaces/dayInterface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{
  public user: CalendarUser = JSON.parse(this.info.getUser() as string);
  public calendar: Array<DayInterface[]> = this.user.calendar;
  public currentWeek: DayInterface[] = this.calendar[0];
  public page: number = 1;

  public constructor(
    private info: LocalStorageService
  ){}

  public changeWeek(event: any): void{
    this.currentWeek = this.calendar[event - 1];
    this.page = event;
  }

}