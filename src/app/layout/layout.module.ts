import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {FlexLayoutModule} from "@angular/flex-layout";
import {RouterModule} from "@angular/router";
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent,
  ],
  exports: [
    MenuComponent,
    FooterComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ]
})
export class LayoutModule { }
