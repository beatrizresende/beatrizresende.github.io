import { Component, OnInit } from '@angular/core';
import { Plano } from 'src/app/models/plano.model';
import { PlanoService } from 'src/app/services/plano.service';

@Component({
  selector: 'app-pagina-plano',
  templateUrl: './pagina-plano.component.html',
  styleUrls: ['./pagina-plano.component.css']
})
export class PaginaPlanoComponent implements OnInit {

  constructor(
    private planoService: PlanoService
  ) { }

  ngOnInit(): void {
  }
}
