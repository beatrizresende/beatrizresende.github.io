import { Formaters } from './../../util/Formaters';
import { IUsuario } from './../../models/IUsuario';
import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meus-dados',
  templateUrl: './meus-dados.component.html',
  styleUrls: ['./meus-dados.component.css']
})
export class MeusDadosComponent implements OnInit {
  public user: IUsuario;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void { 
    this.getUser();
  }

  getUser() {
    const token = this.usuarioService.getToken();
    this.usuarioService.getUserById(token).subscribe(response => this.user = response );
  }
}
