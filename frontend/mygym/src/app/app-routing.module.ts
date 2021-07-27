import { PageSuccessComponent } from './components/page-success/page-success.component';
import { ContatoComponent } from './components/contato/contato.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './components/layout/layout.component';
import { MeusDadosComponent } from './components/meus-dados/meus-dados.component';
import { CardPlanoComponent } from './components/planos/card-plano/card-plano.component'
import { DefaultLayoutComponent } from './components/default-layout/default-layout.component';
import { LoginComponent } from './components/login/login.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { PaginaPlanoComponent } from './components/planos/pagina-plano/pagina-plano.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuardService } from './guards/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        component: CardPlanoComponent,
      }
    ],
  },
  {
    path: 'login',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      { path: '', redirectTo: 'login', pathMatch: 'full' }      
    ],
  },
  {
    path: 'cadastro',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        component: CadastroComponent,
      }
    ],
  },
  {
    path: 'success',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        component: PageSuccessComponent,
      }
    ],
  },
  {
    path: 'sobre',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        component: SobreComponent,
      }
    ],
  },
  {
    path: 'contato',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        component: ContatoComponent,
      }
    ],
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
    canActivate: [AuthGuardService],
  },
  {
    path: 'home',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      }
    ],
    canActivate: [AuthGuardService],
  },
  { 
    path: 'planos',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        component: CardPlanoComponent 
      },
      {
        path: ':id',
        component: PaginaPlanoComponent 
      }
    ],
  },
  { path: '**', redirectTo: 'login' }
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
