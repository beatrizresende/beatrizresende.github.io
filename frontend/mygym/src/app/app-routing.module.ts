import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './components/layout/layout.component';
import { MeusDadosComponent } from './components/meus-dados/meus-dados.component';
import { CardPlanoComponent } from './components/planos/card-plano/card-plano.component'

const routes: Routes = [
  {
    path: 'meus-dados',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: MeusDadosComponent,
      }
    ],
  },
  { path: '', component: CardPlanoComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
