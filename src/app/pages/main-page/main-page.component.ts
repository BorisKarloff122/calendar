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
  public open: boolean = false;

  public constructor(
  ){}

  public closeModal(): void{
    this.open = false;
  }

  public openModal(): void{
    this.open = true;
  }
}
