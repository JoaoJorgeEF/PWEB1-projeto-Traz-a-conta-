import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {LayoutModule} from "./layout/layout.module";
import {HomeModule} from "./home/home.module";
import {ItensCardapioModule} from "./itens-cardapio/itens-cardapio.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from "@angular/flex-layout";
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from "@angular/router";
import { TestePipe } from './shared/pipes/teste.pipe';
import {FirestoreModule} from "./firestore/firestore.module";

@NgModule({
  declarations: [
    AppComponent,
    TestePipe
  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    BrowserModule,
    FlexLayoutModule,
    LayoutModule,
    HomeModule,
    ItensCardapioModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
