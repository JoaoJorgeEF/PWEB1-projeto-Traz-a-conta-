import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarPedidosComponent } from './cadastrar-pedidos/cadastrar-pedidos.component';
import { ListarPedidosComponent } from './listar-pedidos/listar-pedidos.component';



@NgModule({
  declarations: [
    CadastrarPedidosComponent,
    ListarPedidosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PedidosModule { }
