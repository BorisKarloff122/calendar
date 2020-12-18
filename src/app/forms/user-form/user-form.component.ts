import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LocalStorageService} from '../../services/local-storage.service';
import {Validators} from '@angular/forms';
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
  public userForm = this.fb.group({
    userGender: [this.user.userGender, Validators.required],
    userWeight: [this.user.userWeight, [Validators.required, Validators.max(250)]],
    userHeight: [this.user.userHeight, [Validators.required, Validators.max(350)]],
    userMinCal: [this.user.userMinCal, [Validators.required, Validators.max(9999)]],
    userMaxCal: [this.user.userMaxCal, [Validators.required, Validators.max(9999)]]
  });
  public error: boolean | undefined;
  @Input() public open: boolean | undefined;
  @Output() public closeModal: EventEmitter<string> = new EventEmitter<string>();

  public constructor(
    public localStorage: LocalStorageService,
    private fb: FormBuilder,
  ){}

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

  public closeThisModal(): void{
        this.closeModal.emit();
  }
}
