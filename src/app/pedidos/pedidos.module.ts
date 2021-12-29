import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarPedidosComponent } from './cadastrar-pedidos/cadastrar-pedidos.component';
import { ListarPedidosComponent } from './listar-pedidos/listar-pedidos.component';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'



@NgModule({
  declarations: [
    CadastrarPedidosComponent,
    ListarPedidosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatInputModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatSnackBarModule,
    MatSelectModule,
    MatTableModule,
    MatSlideToggleModule
  ],
  exports: [
      MatSlideToggleModule
  ]
})
export class PedidosModule { }
