import { Component, Input, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CalendarService} from '../../services/calendar.service';


@Component({
  selector: 'app-meal-form',
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.css']
})
export class MealFormComponent {
  @Input() public openMeal: boolean | undefined;
  @Output() public closeMeal: EventEmitter<string> = new EventEmitter<string>();
  public title: string = 'New Meal';
  public error: boolean = false;
  public mealForm: FormGroup = this.formCreate();

  public constructor(
    private fb: FormBuilder,
    private calendarService: CalendarService
  ){}

  public formCreate(): FormGroup{
   return this.fb.group({
      title: ['', Validators.required],
      type: ['Breakfast'],
      time: ['8:00'],
      day: ['Mon'],
      calValue: ['', Validators.required],
      carbs: ['', Validators.required],
      fats: ['', Validators.required],
      proteins: ['', Validators.required]
    });
  }

  public onSubmit(): void{
    if (this.mealForm.valid){
      this.error = false;
      this.calendarService.setMeal(this.mealForm.value);
      this.close();
    }
    else{
      this.error = true;
    }
  }

  public close(): void {
    this.closeMeal.emit();
  }
}
