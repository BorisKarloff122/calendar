import {Component} from '@angular/core';
import {LocalStorageService} from '../../services/local-storage.service';
import {CalendarUser} from '../../interfaces/userInterface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{
  public open: boolean = false;
  public user: CalendarUser = this.localStorage.getUser();

  constructor(
    private localStorage: LocalStorageService
  ){}

  public closeModal(): void{
    this.open = false;
  }

  public openModal(): void{
    this.open = true;
  }
}
