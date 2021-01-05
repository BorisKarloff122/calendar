import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LocalStorageService} from '../../services/local-storage.service';
import {AbstractControl, FormGroup, Validators} from '@angular/forms';
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
  public userForm!: FormGroup;
  public error: boolean | undefined;
  public isSubmitted: boolean = false;
  @Input() public user!: CalendarUser;
  @Input() public open: boolean | undefined;
  @Output() public closeModal: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    public localStorage: LocalStorageService,
    private fb: FormBuilder,
  ){}

  ngOnInit(): void{
    this.formCreate();
  }

  private formCreate(): void{
   this.userForm = this.fb.group({
      userGender: [this.user.userGender, Validators.required],
      userWeight: [this.user.userWeight, [Validators.required, Validators.max(250)]],
      userHeight: [this.user.userHeight, [Validators.required, Validators.max(250)]],
      userMinCal: [this.user.userMinCal, [Validators.required]],
      userMaxCal: [this.user.userMaxCal, [Validators.required]],
      userProteins: [this.user.userProteins, [Validators.required]],
      userCarbs: [this.user.userCarbs, [Validators.required]],
      userFats: [this.user.userFats, [Validators.required]],
    });
  }

  public onSubmit(): void{
    this.isSubmitted = true;
    if (this.userForm.valid){
      this.localStorage.saveToStorage(this.userForm.value);
      this.closeThisModal();
    }
  }

  public closeThisModal(): void{
        this.closeModal.emit();
  }

  get userFormList(): { [p: string]: AbstractControl } {
    return this.userForm.controls;
  }
}
