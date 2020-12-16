import { Injectable } from '@angular/core';
import {CalendarUser} from '../interfaces/userInterface';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public constructor(
  ){ }

  public saveToStorage(form: CalendarUser): void{
      localStorage.setItem('users', JSON.stringify(form));
  }

  public getUser(): string | null{
   return localStorage.getItem('users');
  }
}
