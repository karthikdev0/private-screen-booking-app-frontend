import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { BookingSectionComponent } from './booking-section/booking-section.component';




@NgModule({
  declarations: [
    ImageSliderComponent,
    ReviewsComponent,
    ContactUsComponent,
    HomeComponent,
    BookingSectionComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbModule,
    AngularMaterialModule
  ],
  exports : [
    ImageSliderComponent,
    ReviewsComponent,
    ContactUsComponent,
    HomeComponent
  ]
})
export class HomeModule { }
