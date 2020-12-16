import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CalendarUser} from '../../interfaces/userInterface';
import {LocalStorageService} from '../../services/local-storage.service';
import {HourMarkInterface} from '../../interfaces/hourMarkInterface';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  public buttonText: string = '';
  public formTitle: string = '';
  public dayNames: Array<string> = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  public hourMarks: HourMarkInterface[] = Array(11).fill(0).map(() => ({}));
  public week: Array<object> = Array(7).fill(0).map((i, x) => ({ name: (this.dayNames[x]), hourMarks: this.hourMarks, calPerDay: 0}));
  public myForm: CalendarUser = {
    gender: '',
    weight: 0,
    height: 0,
    calendar: Array(4).fill(this.week),
    minCal: 0,
    maxCal: 0
  };
  @Input() public open: boolean | undefined;
  @Output() public closeModal: EventEmitter<string> = new EventEmitter<string>();

  public constructor(
    private router: Router,
    public localStorage: LocalStorageService,
  ){ }

  public ngOnInit(): void {
    this.checkRouterLink();
  }

  public checkRouterLink(): void {
    if (this.router.url === '/calendar') {
      this.buttonText = 'Change User';
      this.formTitle = 'Change User Info';
    } else {
      this.buttonText = 'Create User';
      this.formTitle = 'New User Info';

    }
  }

  public countCalories(): void{
    this.myForm.minCal = Math.round(((10 * this.myForm.weight) + (6.25 * this.myForm.height) + 5));
    this.myForm.maxCal = Math.round(((10 * this.myForm.weight) + (6.25 * this.myForm.height) + 623.845));
  }

  public closeThisModal(): void{
        this.closeModal.emit();
  }

  public sub(): void{
    window.location.href = '/calendar';
  }


}
