import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-pagamento',
  templateUrl: './dados-pagamento.component.html',
  styleUrls: ['./dados-pagamento.component.css']
})
export class DadosPagamentoComponent implements OnInit {
  public isOpen: boolean = true;
  public numeroCartao: string = '555 5555 5555 5555';
  public titular: string = 'Fulana de tal';
  public validade: string = '02/2027';
  public cvc: string = '123';
  public cadastro

  constructor() { }

  ngOnInit(): void {
  }

}
