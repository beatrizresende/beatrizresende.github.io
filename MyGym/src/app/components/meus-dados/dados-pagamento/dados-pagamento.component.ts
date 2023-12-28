import { IUsuario } from './../../../models/IUsuario';
import { Component, OnInit, Input } from '@angular/core';
import { Formaters } from '../../../util/Formaters';

@Component({
  selector: 'app-dados-pagamento',
  templateUrl: './dados-pagamento.component.html',
  styleUrls: ['./dados-pagamento.component.css']
})
export class DadosPagamentoComponent implements OnInit {
  public isOpen: boolean = true;
  
  @Input() user: IUsuario;  

  constructor() { }

  ngOnInit(): void { }
}
