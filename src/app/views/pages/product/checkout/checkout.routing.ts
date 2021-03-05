import { CheckoutComponent } from "./checkout.component";
import { ShippingDetailsComponent } from "./shipping-details/shipping-details.component";
import { ProductsComponent } from "./products/products.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../../../../shared/guards/auth_gaurd";

export const checkoutRoutes: Routes = [
  {
    path: "checkouts",
    component: CheckoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        component: ProductsComponent,
        outlet: "checkOutlet",
      },
      {
        path: "shipping-details",
        component: ShippingDetailsComponent,
        outlet: "checkOutlet",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(checkoutRoutes)],
  exports: [RouterModule],
})
export class CheckoutRoutingModule {}
