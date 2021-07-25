import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Texts } from './../../models/Texts';
import { PopupService } from '../../services/popup.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  public form: FormGroup;
  public step: number = 1;
  public textsCustom = Texts;
  public isSubmitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private popup: PopupService,
    ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      nome: ['', [Validators.required]],
      cpf: ['', Validators.compose([Validators.required, this.validateCpf])],
      dataNascimento: ['', Validators.compose([Validators.required, this.validadeBday])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      telefone: ['', Validators.compose([Validators.required, this.validatePhoneNumber])],
      senha: ['', Validators.compose([Validators.required, this.validatePassword])],
    })
  } 

  setStep() {
    this.isSubmitted = true;    

    if(
      !this.formControls('nome').errors && 
      !this.formControls('cpf').errors && 
      !this.formControls('dataNascimento').errors) {
      
      this.isSubmitted = false; 
      this.step === 2 ? this.step-- : this.step++;
    }
  }

  cadastrar() {
    this.isSubmitted = true;

    if(this.form.value) {
      console.log(this.form.value);
      this.popup.open({
        title: 'Sucesso!',
        text: 'Cadastro efetuado com sucesso.',
      }, '/login', 5000);
    }
  }

  formControls(value) {
    return this.form.get(value);
  }

  getErrorMessage(input) {
    if(this.isSubmitted) {
      if (this.formControls(input).errors) {
        return this.textsCustom.form.error[input][
          Object.keys(this.formControls(input).errors)[0]
        ];
      }
    }
  }

  setClassError(input) {
    return {
      'form-group-error-message': this.isSubmitted && this.formControls(input).invalid
    };
  }

  validatePhoneNumber(control: AbstractControl) : ValidationErrors | null {
    if(control.value.length === 15 && control.value[5] !== '9') {
      return { validatePhoneNumber: true }
    }
    return null
  }

  validatePassword(control: AbstractControl) : ValidationErrors | null {
    if(control.value.length < 6) {
      return { validatePassword: true }
    }
    return null
  }

  validateCpf(control: AbstractControl) : ValidationErrors | null {
    if(control.value.length < 14) {
      return { validateCpf: true }
    }
    return null
  }

  validadeBday(control: AbstractControl) : ValidationErrors | null {    
    const date = moment(control.value, 'DD/MM/YYYY');
    const today = moment(new Date(), 'DD/MM/YYYY');        

    if(!date.isValid() || !date.isBefore(today)) {
      return { validadeBday: true };
    }
    return null;    
  }

  somenteNumeros(event) {
    return (event.charCode >= 48 && event.charCode <= 57);
  }
}
