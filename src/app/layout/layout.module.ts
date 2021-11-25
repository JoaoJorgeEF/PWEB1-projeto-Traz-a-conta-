import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent
  ],
  exports: [
    MenuComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule
  ]
})
export class LayoutModule { }
