import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CardsHomeComponent} from "./home/cards-home/cards-home.component";
import {CadastroItensCardapioComponent} from "./itens-cardapio/cadastro-itens-cardapio/cadastro-itens-cardapio.component";
import {ListagemItensCardapioComponent} from "./itens-cardapio/listagem-itens-cardapio/listagem-itens-cardapio.component";
import { CadastraMesasComponent } from './mesas/cadastra-mesas/cadastra-mesas.component';
import { ListaMesasComponent } from './mesas/lista-mesas/lista-mesas.component';

const routes: Routes = [
  { path: 'home',
    component: CardsHomeComponent
  },
  { path: 'cadastraritemcardapio',
    component: CadastroItensCardapioComponent
  },
  { path: 'cadastraritemcardapio/:id',
    component: CadastroItensCardapioComponent
  },
  { path: 'listaritenscardapio',
    component: ListagemItensCardapioComponent
  },
  { path: 'cadastrarmesas',
    component: CadastraMesasComponent
  },
  { path: 'listarmesas',
    component: ListaMesasComponent
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
