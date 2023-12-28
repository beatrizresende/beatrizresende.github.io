import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {
  @Input() numeroCartao: number;
  @Input() titular: string;
  @Input() validade: any;
  @Input() cvc: number;
  @Input() cadastro: number;

  constructor() { }

  ngOnInit(): void {
  }  

}
