import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemItensCardapioComponent } from './listagem-itens-cardapio/listagem-itens-cardapio.component';
import { CadastroItensCardapioComponent } from './cadastro-itens-cardapio/cadastro-itens-cardapio.component';
import {RouterModule} from "@angular/router";
import {MatInputModule} from "@angular/material/input";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";

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
    CommonModule,
    RouterModule,
    MatInputModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule
  ]
})
export class ItensCardapioModule { }
