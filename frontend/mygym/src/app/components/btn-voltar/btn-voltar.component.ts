import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-btn-voltar',
  templateUrl: './btn-voltar.component.html',
  styleUrls: ['./btn-voltar.component.css']
})
export class BtnVoltarComponent implements OnInit {
  
  page: string;

  constructor(
  private route: ActivatedRoute
) { }

ngOnInit(): void {
  // this.route.params.subscribe(next params: Params => {
  //   this.planoId = +params.id;
  // })
}
}
