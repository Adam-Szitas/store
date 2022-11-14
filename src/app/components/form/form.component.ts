import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { UserState } from 'src/app/store/reducers/user/user.reducer';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  public credentialsForm: FormGroup = new FormGroup({})

  @Output()
  public formValues: EventEmitter<UserState> = new EventEmitter();

  public ngOnInit(): void {
      this.credentialsForm = new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl(),
        age: new FormControl()
      })
  }

  public submitForm(): void{
    this.formValues.emit(this.credentialsForm.getRawValue());
  }

}
