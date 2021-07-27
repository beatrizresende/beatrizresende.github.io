import { Plano } from 'src/app/models/plano.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PlanoService } from 'src/app/services/plano.service';

@Component({
  selector: 'app-btn-voltar',
  templateUrl: './btn-voltar.component.html',
  styleUrls: ['./btn-voltar.component.css']
})
export class BtnVoltarComponent implements OnInit {
  
  public page: string;
  public planos: Plano[];
  public planoId: number;
  public routerLink: any;

  constructor(
  private route: ActivatedRoute,
  private planoService: PlanoService,
) { }

ngOnInit(): void {
}

onClick() {
  this.routerLink = "/planos";
}
}