import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemItensCardapioComponent } from './listagem-itens-cardapio/listagem-itens-cardapio.component';
import { CadastroItensCardapioComponent } from './cadastro-itens-cardapio/cadastro-itens-cardapio.component';

@NgModule({
  declarations: [
    ListagemItensCardapioComponent,
    CadastroItensCardapioComponent
  ],
  exports: [
    ListagemItensCardapioComponent,
    CadastroItensCardapioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ItensCardapioModule { }
