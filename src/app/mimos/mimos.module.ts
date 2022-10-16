import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MimosRoutingModule } from './mimos-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CardsComponent } from './components/cards/cards.component';
import { SearchSitterComponent } from './pages/search-sitter/search-sitter.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { CalendarComponent } from './components/calendar/calendar.component';
import { AboutComponent } from './pages/about/about.component';


@NgModule({
  declarations: [
    HomeComponent,
    CardsComponent,
    SearchSitterComponent,
    TestimonialsComponent,
    TruncatePipe,
    CalendarComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    MimosRoutingModule,
    NgbModule
  ]
})
export class MimosModule { }
