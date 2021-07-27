import { ActivatedRoute } from '@angular/router';
import { IUsuario } from './../../models/IUsuario';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public user: IUsuario;

  constructor(
    private usuarioService:  UsuarioService,
    private activatedRoute: ActivatedRoute
    ) { 
      activatedRoute.params.subscribe(item => {
        this.getUser();
      });
    }

  ngOnInit(): void {
  }

  getUser() {
    const token = this.usuarioService.getToken();
    this.usuarioService.getUserById(token).subscribe(response => this.user = response );
  }

}
