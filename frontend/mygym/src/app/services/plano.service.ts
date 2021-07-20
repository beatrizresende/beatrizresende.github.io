import { Injectable } from '@angular/core';
import { Plano } from '../models/plano.model';

@Injectable({
  providedIn: 'root'
})
export class PlanoService {

  constructor() { }

  planos: Plano[] = [
    {
      imgPath: '../assets/SARADA EM 3 MESES.jfif',
      titulo: 'SARADA EM 3 MESES',
    preco: 40,
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    id: 1
    },
    {
      imgPath: '../assets/SARADA EM 3 MESES.jfif',
      titulo: 'SAUDÁVEL & EQUILIBRADA',
    preco: 20,
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    id: 2
    },
    {
      imgPath: '../assets/SARADA EM 3 MESES.jfif',
      titulo: 'SAÚDE MENTAL EM 1º LUGAR',
    preco: 20,
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    id: 3
    }
  ];
}