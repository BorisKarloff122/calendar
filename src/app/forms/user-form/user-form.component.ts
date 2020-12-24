import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LocalStorageService} from '../../services/local-storage.service';
import {AbstractControl, FormGroup, Validators} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {CalendarUser} from '../../interfaces/userInterface';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  public buttonText = 'Change User';
  public formTitle = 'Change User Info';
  public user: CalendarUser = this.localStorage.getUser();
  public userForm = this.formCreate();
  public error: boolean | undefined;
  @Input() public open: boolean | undefined;
  @Output() public closeModal: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    public localStorage: LocalStorageService,
    private fb: FormBuilder,
  ){}

  public formCreate(): FormGroup{
   return  this.fb.group({
      userGender: [this.user.userGender, Validators.required],
      userWeight: [this.user.userWeight, [Validators.required, Validators.max(250)]],
      userHeight: [this.user.userHeight, [Validators.required, Validators.max(250)]],
      userMinCal: [this.user.userMinCal, [Validators.required, Validators.max(4000)]],
      userMaxCal: [this.user.userMaxCal, [Validators.required, Validators.max(4000)]]
    });
  }

  public onSubmit(): void{
    if (this.userForm.valid){
      this.error = false;
      this.localStorage.saveToStorage(this.userForm.value);
      this.closeThisModal();
    }
    else{
      this.error = true;
    }
  }

  public controlsGetter(controlName: string): AbstractControl{
    return this.userForm.controls[controlName];
  }

  public closeThisModal(): void{
        this.closeModal.emit();
  }
}
