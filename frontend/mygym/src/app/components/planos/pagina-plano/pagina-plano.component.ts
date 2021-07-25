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
  public planos: Plano[];
  public plano: any;
  public planoId: number;

  constructor(
    private planoService: PlanoService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.planoId =+ params.id;
    });
   }

  ngOnInit(): void {
    this.planos = this.planoService.planos;
    // this.route.params.subscribe(params: Params => {
    //   this.planoId = +params.id;
    // })
  }
}
