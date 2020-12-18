import { Component, OnInit} from '@angular/core';
import {CalendarService} from '../../services/calendar.service';

@Component({
  selector: 'app-reg-page',
  templateUrl: './reg-page.component.html',
  styleUrls: ['./reg-page.component.css']
})
export class RegPageComponent implements OnInit{
  public constructor(
    private calendarSetter: CalendarService
  ) { }

  public ngOnInit(): void{
      this.calendarSetter.setCalendar();
  }
}
