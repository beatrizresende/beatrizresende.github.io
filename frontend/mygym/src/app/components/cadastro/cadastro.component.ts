import { UsuarioService } from './../../services/usuario.service';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Texts } from './../../models/Texts';
import { Router } from '@angular/router';

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
  public regexBandeiras: any;  
  public cadastro: boolean = true;  

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      nome: ['', [Validators.required]],
      cpf: ['', Validators.compose([Validators.required, this.validateCpf])],
      dataNascimento: ['', Validators.compose([Validators.required, this.validateBday])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      telefone: ['', Validators.compose([Validators.required, this.validatePhoneNumber])],
      senha: ['', Validators.compose([Validators.required, this.validatePassword])],      
      numeroCartao: ['', [Validators.required]],
      titular: ['', [Validators.required]],
      validade: ['', Validators.compose([Validators.required, this.validateExpDate])],
      cvc: ['', [Validators.required]],
    })
  } 

  backStep() {
    this.step--;
  }

  nextStep() {
    this.isSubmitted = true; 
    
    if(
      this.step === 1 && 
      !this.formControls('nome').errors && 
      !this.formControls('cpf').errors && 
      !this.formControls('dataNascimento').errors) {
      
      this.step++;
      this.isSubmitted = false;
    }
    
    if(
      this.step === 2 && 
      !this.formControls('email').errors && 
      !this.formControls('telefone').errors && 
      !this.formControls('senha').errors) {
        
      this.step++;
      this.isSubmitted = false;
    }
  }

  cadastrar() {
    this.isSubmitted = true;

    if(this.form.valid) {
      this.usuarioService.saveUser(this.form.value).subscribe(response => {
        this.router.navigate(['/success']);
      });
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

  validateBday(control: AbstractControl) : ValidationErrors | null {    
    const date = moment(control.value, 'DD/MM/YYYY');
    const today = moment(new Date(), 'DD/MM/YYYY');
    const older = moment(new Date('01/01/1900'), 'DD/MM/YYYY');

    if(!date.isValid() || !date.isBefore(today) || (date < older)) {
      return { validadeBday: true };
    }
    return null;    
  }

  validateExpDate(control: AbstractControl) : ValidationErrors | null {    
    const date = moment(control.value, 'MM/YY');
    const today = moment(new Date(), 'MM/YY');

    if(!date.isValid() || date.isBefore(today)) {
      return { validateExpDate: true };
    }
    return null;    
  }

  somenteNumeros(event) {
    return (event.charCode >= 48 && event.charCode <= 57);
  }
  
}
