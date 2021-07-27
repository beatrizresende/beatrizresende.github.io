import { Component, OnInit } from '@angular/core';
import { Plano } from 'src/app/models/plano.model';
import { PlanoService } from '../../../services/plano.service'

@Component({
  selector: 'app-card-plano',
  templateUrl: './card-plano.component.html',
  styleUrls: ['./card-plano.component.css']
})
export class CardPlanoComponent implements OnInit {

  public planos: any;
  public firstSlide: number = 0;
  public secondSlide: number = 1;
  public thirdSlide: number = 2;

  constructor(
    private planoService: PlanoService
  ) { }

  ngOnInit(): void {
    this.getPlanos();
  }

  getPlanos() {
    this.planoService.getPlanos().subscribe(response => {
      this.planos = response;
    })
  }

  comprarPlano() {
    alert('Plano comprado com sucesso!');
  }

  onClickPrevious() {
    const previous = this.firstSlide - 1;
    if (previous < 0){ 
      this.firstSlide = this.planos.length - 1;
    } else {
      this.firstSlide = previous;
    }
    this.secondSlide--;
    if (this.secondSlide < 0){ 
      this.secondSlide = this.planos.length - 1;
    } else {
      this.secondSlide = this.secondSlide;
    }
    this.thirdSlide--;
    if (this.thirdSlide < 0){ 
      this.thirdSlide = this.planos.length - 1;
    } else {
      this.thirdSlide = this.thirdSlide;
    }
  }

  onClickNext() {
    const next = this.thirdSlide + 1; //next=2
    if (next === this.planos.length) { 
      this.thirdSlide =  0 
    } else if (next > this.planos.length) {
      this.thirdSlide =  next - next;
      this.secondSlide-=this.secondSlide;
      this.firstSlide++;
    } else {
      this.thirdSlide = next;//thirdSlide = 2
    } 
    this.secondSlide++;//secondSlide = 1
    if (this.secondSlide === this.planos.length) { 
      this.secondSlide =  0 
    } else if (next > this.planos.length) {
      this.secondSlide-=this.secondSlide;
    } else {
      this.secondSlide = this.secondSlide;//secondSlide = 1
    }
    this.firstSlide++;//firstSlide = 3
    if (this.firstSlide === this.planos.length) { 
      this.firstSlide =  0 
    } else if (next > this.planos.length) {
      this.firstSlide-=this.firstSlide;
    } else {
      this.firstSlide = this.firstSlide;//secondSlide = 1
    }
  }

}
