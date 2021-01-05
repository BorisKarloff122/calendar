import {Component, EventEmitter, Input, Output} from '@angular/core';
import {HourMarkInterface} from '../../interfaces/hourMarkInterface';
import {CalendarUser} from '../../interfaces/userInterface';

@Component({
  selector: 'app-meal-view',
  templateUrl: './meal-view.component.html',
  styleUrls: ['./meal-view.component.css']
})
export class MealViewComponent{
  @Input() public user!: CalendarUser;
  @Input() public targetMark!: HourMarkInterface;
  @Input() public openView!: boolean;
  @Output() public closeView: EventEmitter<string> = new EventEmitter<string>();

  constructor(){}

  public closeThisView(): void{
    this.openView = false;
    this.closeView.emit();
  }
}
