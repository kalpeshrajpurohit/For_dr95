import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { WhatsNewProductComponent } from './whats-new-product/whats-new-product.component';
import { WomenSectionComponent } from './women-section/women-section.component';
import { FilterSideBarComponent } from './filter-side-bar/filter-side-bar.component';
import { Ng5SliderModule } from 'ng5-slider';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    WhatsNewProductComponent,
    WomenSectionComponent,
    FilterSideBarComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    Ng5SliderModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
