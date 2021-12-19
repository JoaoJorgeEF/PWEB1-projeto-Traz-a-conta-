import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaMesasComponent } from './lista-mesas/lista-mesas.component';
import { CadastraMesasComponent } from './cadastra-mesas/cadastra-mesas.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    ListaMesasComponent,
    CadastraMesasComponent
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
    MatTableModule,
  ]
})
export class MesasModule { }
