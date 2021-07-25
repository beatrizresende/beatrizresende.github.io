import { ContatoComponent } from './components/contato/contato.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './components/layout/layout.component';
import { MeusDadosComponent } from './components/meus-dados/meus-dados.component';
import { DefaultLayoutComponent } from './components/default-layout/default-layout.component';
import { LoginComponent } from './components/login/login.component';
import { IndexComponent } from './components/index/index.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';

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
    path: 'cadastro',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        component: CadastroComponent,
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
    path: 'contato',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        component: ContatoComponent,
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
