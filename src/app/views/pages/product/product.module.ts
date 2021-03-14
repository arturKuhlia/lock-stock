// Core Dependencies
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

// configuration and services
import { ProductRoutes } from "./product.routing";

// Components
import { CheckoutModule } from "./checkout/checkout.module";

import { ProductComponent } from "./product.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { SharedModule } from "../../../shared/shared.module";
import { FavouriteProductsComponent } from "./favourite-products/favourite-products.component";
import { CartProductsComponent } from "./cart-products/cart-products.component";
import { CartCalculatorComponent } from "./cart-calculator/cart-calculator.component";
import { EditProductComponent } from "./edit-product/edit-product.component";
import { IvyCarouselModule } from "angular-responsive-carousel";
import { MaterialModule } from "src/app/angular-material.module";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  imports: [
    MaterialModule,
    IvyCarouselModule,
    CommonModule,
    RouterModule.forChild(ProductRoutes),
    SharedModule,
    CheckoutModule,
    FlexLayoutModule,
  ],
  declarations: [
    ProductComponent,
    ProductListComponent,
    AddProductComponent,
    ProductDetailComponent,
    FavouriteProductsComponent,
    CartProductsComponent,
    CartCalculatorComponent,
    EditProductComponent,
  ],
  exports: [],
})
export class ProductModule {}
