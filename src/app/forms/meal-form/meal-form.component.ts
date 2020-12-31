import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CalendarService} from '../../services/calendar.service';


@Component({
  selector: 'app-meal-form',
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.css']
})
export class MealFormComponent implements OnInit{
  @Input() public openMeal: boolean | undefined;
  @Output() public closeMeal: EventEmitter<string> = new EventEmitter<string>();
  public title: string = 'New Meal';
  public days: Array<string> = this.calendarService.dayNames;
  public hourMarks: Array<string> = this.calendarService.hourMarksNames;
  public isSubmitted: boolean = false;
  public mealForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private calendarService: CalendarService
  ){}

  ngOnInit(): void{
    this.formCreate();
  }

  public formCreate(): void{
   this.mealForm = this.fb.group({
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
    this.isSubmitted = true;
    if (this.mealForm.valid){
      this.calendarService.setMeal(this.mealForm.value);
      this.close();
    }
  }

  public close(): void {
    this.closeMeal.emit();
  }

  get meals(): { [p: string]: AbstractControl } {
    return this.mealForm.controls;
  }
}
