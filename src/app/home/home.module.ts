import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsHomeComponent } from './cards-home/cards-home.component';

@NgModule({
  declarations: [
    CardsHomeComponent
  ],
  exports: [
    CardsHomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
