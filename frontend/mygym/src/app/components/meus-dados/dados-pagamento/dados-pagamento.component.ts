import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-pagamento',
  templateUrl: './dados-pagamento.component.html',
  styleUrls: ['./dados-pagamento.component.css']
})
export class DadosPagamentoComponent implements OnInit {
  public isOpen: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
