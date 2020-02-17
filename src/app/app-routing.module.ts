import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { WhatsNewProductComponent } from './whats-new-product/whats-new-product.component';
import { WomenSectionComponent } from './women-section/women-section.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


const routes: Routes = [
    {path : '' , component : HomePageComponent},
    {path : 'whatNewProduct' ,component : WhatsNewProductComponent},
    {path : 'women_section' , component : WomenSectionComponent},
    {path: 'product_details' , component: ProductDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
