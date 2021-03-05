import { CheckoutRoutingModule } from "./checkout.routing";
import { SharedModule } from "../../../../shared/shared.module";
import { ProductsComponent } from "./products/products.component";
import { ShippingDetailsComponent } from "./shipping-details/shipping-details.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CheckoutComponent } from "./checkout.component";
import { FormSuccessComponent } from "./form-success/form-success.component";

@NgModule({
  imports: [CommonModule, SharedModule, CheckoutRoutingModule],
  declarations: [
    CheckoutComponent,
    ShippingDetailsComponent,
    ProductsComponent,
    FormSuccessComponent,
  ],
  exports: [CheckoutComponent],
})
export class CheckoutModule {}
