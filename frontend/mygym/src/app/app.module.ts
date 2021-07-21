import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { SideBarComponent } from './components/side-bar/side-bar.component';
import { DefaultLayoutComponent } from './components/default-layout/default-layout.component';

import { MeusDadosComponent } from './components/meus-dados/meus-dados.component';
import { DadosPessoaisComponent } from './components/meus-dados/dados-pessoais/dados-pessoais.component';
import { DadosContatoComponent } from './components/meus-dados/dados-contato/dados-contato.component';
import { DadosPagamentoComponent } from './components/meus-dados/dados-pagamento/dados-pagamento.component';
import { LayoutComponent } from './components/layout/layout.component';
import { PlanoService } from './services/plano.service';
import { PaginaPlanoComponent } from './components/planos/pagina-plano/pagina-plano.component';
import { BtnComprarComponent } from './components/planos/card-plano/btn-comprar/btn-comprar.component';

@NgModule({
  declarations: [
    AppComponent,
    MeusDadosComponent,
    DadosPessoaisComponent,
    DadosContatoComponent,
    DadosPagamentoComponent,
    SideBarComponent,
    DefaultLayoutComponent,
    LayoutComponent,
    PaginaPlanoComponent,
    BtnComprarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [PlanoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
