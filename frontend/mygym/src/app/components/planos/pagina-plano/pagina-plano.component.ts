import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Plano } from 'src/app/models/plano.model';
import { PlanoService } from 'src/app/services/plano.service';

@Component({
  selector: 'app-pagina-plano',
  templateUrl: './pagina-plano.component.html',
  styleUrls: ['./pagina-plano.component.css']
})
export class PaginaPlanoComponent implements OnInit {

  planos: Plano[];
  planoId: number;

    constructor(
    private planoService: PlanoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.planos = this.planoService.planos;
    this.route.params.subscribe(params: Params => {
      this.planoId = +params.id;
    })
  }
}
