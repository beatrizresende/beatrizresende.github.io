import { IUsuario } from './../../models/IUsuario';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public user: IUsuario;
  public userId: string;

  constructor(
    private router:  Router,
    private usuarioService:  UsuarioService,
    private activatedRoute:  ActivatedRoute,
    ) { }

  ngOnInit(): void {    
    this.activatedRoute.queryParams.subscribe(params => {
      this.checkParams(params);
    });
  }

  checkParams(params) {
    if(params && params.id) {
      this.usuarioService.getUserById(params.id).subscribe(response => this.user = response);
    }
    else {
      this.router.navigate(['/login']);
    }
  }
}
