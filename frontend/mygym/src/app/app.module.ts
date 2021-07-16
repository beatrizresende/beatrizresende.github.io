import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeusDadosComponent } from './components/meus-dados/meus-dados.component';
import { DadosPessoaisComponent } from './components/meus-dados/dados-pessoais/dados-pessoais.component';
import { DadosContatoComponent } from './components/meus-dados/dados-contato/dados-contato.component';
import { DadosPagamentoComponent } from './components/meus-dados/dados-pagamento/dados-pagamento.component';

@NgModule({
  declarations: [
    AppComponent,
    MeusDadosComponent,
    DadosPessoaisComponent,
    DadosContatoComponent,
    DadosPagamentoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
