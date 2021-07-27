import { IUsuario } from './../../../models/IUsuario';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.css']
})
export class DadosPessoaisComponent implements OnInit {
  public isOpen: boolean = true;
  
  @Input() user: IUsuario;

  constructor() { }

  ngOnInit(): void {
  }

}
