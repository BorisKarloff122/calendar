import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HourMarkInterface} from '../../interfaces/hourMarkInterface';

@Component({
  selector: 'app-meal-view',
  templateUrl: './meal-view.component.html',
  styleUrls: ['./meal-view.component.css']
})
export class MealViewComponent implements OnInit {
  @Input() public targetMark!: HourMarkInterface;
  @Input() public openView!: boolean;
  @Output() public closeView: EventEmitter<string> = new EventEmitter<string>();

  public constructor(){}

  public ngOnInit(): void{}

  public closeThisView(): void{
    this.closeView.emit();
  }
}
