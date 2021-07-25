import { IUsuario } from './../../models/IUsuario';
import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meus-dados',
  templateUrl: './meus-dados.component.html',
  styleUrls: ['./meus-dados.component.css']
})
export class MeusDadosComponent implements OnInit {
  constructor(private service: UsuarioService) { }

  ngOnInit(): void { }

  getUsers() {
    this.service.getUsers().subscribe(response => {
      console.log('response: ', response);
    });
  }

  getUsersById(id) {
    this.service.getUserById(id).subscribe(response => {
      console.log('response: ', response);
    });
  }

  updateUser(user: IUsuario) {
    this.service.updateUser(user).subscribe(response => {
      console.log('response: ', response);
    });
  }

  deleteUser(user: IUsuario) {
    this.service.deleteUser(user).subscribe(response => {
      console.log('response: ', response);
    });
  }
}
