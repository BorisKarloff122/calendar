import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LocalStorageService} from '../../services/local-storage.service';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {CalendarUser} from '../../interfaces/userInterface';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit{
  public buttonText = 'Change User';
  public formTitle = 'Change User Info';
  public user: CalendarUser = this.localStorage.getUser();
  public userForm!: FormGroup;
  public error: boolean | undefined;
  public isSubmitted: boolean = false;
  @Input() public open: boolean | undefined;
  @Output() public closeModal: EventEmitter<string> = new EventEmitter<string>();


  constructor(
    public localStorage: LocalStorageService,
    private fb: FormBuilder,
  ){}

  ngOnInit(): void{
    this.formCreate();
  }

  public formCreate(): void{
   this.userForm = this.fb.group({
      userGender: [this.user.userGender, Validators.required],
      userWeight: [this.user.userWeight, [Validators.required]],
      userHeight: [this.user.userHeight, [Validators.required]],
      userMinCal: [this.user.userMinCal, [Validators.required]],
      userMaxCal: [this.user.userMaxCal, [Validators.required]],
      userProteins: [this.user.userMaxCal, [Validators.required]],
      userCarbs: [this.user.userMaxCal, [Validators.required]],
      userFats: [this.user.userMaxCal, [Validators.required]],
    });
  }

  public onSubmit(): void{
    this.isSubmitted = true;
    if (this.userForm.valid){
      this.localStorage.saveToStorage(this.userForm.value);
      this.closeThisModal();
    }
  }

  get userFormList(): { [p: string]: AbstractControl } {
    return this.userForm.controls;
  }

  public closeThisModal(): void{
        this.closeModal.emit();
  }
}
