import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Texts } from 'src/app/models/Texts';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formGroup: FormGroup;
  public isSubmitted: boolean = false;
  public errMessages = Texts;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.formGroup = this.fb.group({
      user: ['', [Validators.required]],
      pass: ['', [Validators.compose([Validators.required, ])]],
    })
  }

  login() {
    this.isSubmitted = true;
    if (this.formGroup.valid){

      this.formGroup.get('user').value;

    }
    console.log(this.formGroup.value);
  }

  formControls(value) {
    return this.formGroup.get(value);
  }

  getErrorMessage(input) {
    if(this.isSubmitted) {
      if (this.formControls(input).errors) {
        return this.errMessages.form.error[input][
          Object.keys(this.formControls(input).errors)[0]
        ];
      }
    }
  }

  setClassError(input) {
    return {
      'error-message': this.isSubmitted && this.formControls(input).invalid
    };
  }

}
