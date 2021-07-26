import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from './../../services/usuario.service';
import { IUsuario } from './../../models/IUsuario';
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
  public usuarios: IUsuario[];
  public showLoginError: boolean = false;
  public msgErro: String = "Login e/ou Senha incorretos.";


  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router
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
    this.showLoginError = false;

    if (this.formGroup.valid){

      this.usuarioService.getUsers().subscribe(res=> {
        console.log(res);
        res.find(usuario=> {
          if((usuario.email==this.formGroup.get('user').value)
            &&(usuario.senha==this.formGroup.get('pass').value)){
              this.router.navigate(['/']);
          } else{
            this.showLoginError = true;
          }
        })
      });
    }
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
