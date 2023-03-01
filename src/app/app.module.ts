import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './components/shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { HomeModule } from './components/home/home.module';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search/search.component';
import { SearchModule } from './components/search/search.module';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    CommonModule,
    SearchModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
