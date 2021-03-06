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
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';



@NgModule({
  declarations: [
    ListaMesasComponent,
    CadastraMesasComponent
  ],
  exports:[
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
    MatSnackBarModule,
    MatSelectModule,
    MatSlideToggleModule
  ]
})
export class MesasModule { }
