import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroUsuariosComponent } from './cadastro-usuarios/cadastro-usuarios.component';
import { ListagemUsuariosComponent } from './listagem-usuarios/listagem-usuarios.component';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CadastroUsuariosComponent,
    ListagemUsuariosComponent
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
export class UsuariosModule { }
