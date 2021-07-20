import { BrowserModule } from '@angular/platform-browser';
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
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { IndexComponent } from './components/index/index.component';
import { SobreComponent } from './components/sobre/sobre.component';

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
    LoginComponent,
    NavBarComponent,
    IndexComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
