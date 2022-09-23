import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MimosRoutingModule } from './mimos-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CardsComponent } from './components/cards/cards.component';
import { SearchSitterComponent } from './pages/search-sitter/search-sitter.component';


@NgModule({
  declarations: [
    HomeComponent,
    CardsComponent,
    SearchSitterComponent
  ],
  imports: [
    CommonModule,
    MimosRoutingModule
  ]
})
export class MimosModule { }
