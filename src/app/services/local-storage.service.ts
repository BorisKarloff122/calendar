import { Injectable } from '@angular/core';
import {CalendarUser} from '../interfaces/userInterface';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public constructor(
  ){ }

  public saveToStorage(Form: CalendarUser): void{
      localStorage.setItem('user', JSON.stringify(Form));
  }

  public getUser(): CalendarUser{
    if (localStorage.getItem('user') !== null){
      return JSON.parse(localStorage.getItem('user') as string);
    }
    else{
      return {
        userGender: '',
        userWeight: null,
        userHeight: null,
        userMinCal: 0,
        userMaxCal: 0
      };
    }
  }
}
