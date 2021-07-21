import { Component, OnInit } from '@angular/core';
import { Plano } from 'src/app/models/plano.model';
import { PlanoService } from '../../../services/plano.service'

@Component({
  selector: 'app-card-plano',
  templateUrl: './card-plano.component.html',
  styleUrls: ['./card-plano.component.css']
})
export class CardPlanoComponent implements OnInit {

  public arrayPlanos: any;

  constructor(
    private planoService: PlanoService
  ) { }

  ngOnInit(): void {
    this.arrayPlanos = this.planoService.planos;
  }

  

}
