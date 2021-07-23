import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './components/layout/layout.component';
import { MeusDadosComponent } from './components/meus-dados/meus-dados.component';
import { CardPlanoComponent } from './components/planos/card-plano/card-plano.component'
import { DefaultLayoutComponent } from './components/default-layout/default-layout.component';
import { LoginComponent } from './components/login/login.component';
import { IndexComponent } from './components/index/index.component';
import { SobreComponent } from './components/sobre/sobre.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        component: IndexComponent,
      }
    ]
  },
  {
    path: 'login',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      }
    ]
  },
  {
    path: 'sobre',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        component: SobreComponent,
      }
    ]
  },
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
  { path: 'planos', component: CardPlanoComponent}
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
