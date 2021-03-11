import { Product } from "../../../../../shared/models/product";
import { ShippingService } from "../../../../../shared/services/shipping.service";
import { UserDetail, User } from "../../../../../shared/models/user";
import { AuthService } from "../../../../../shared/services/auth.service";
import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { ProductService } from "../../../../../shared/services/product.service";
import { map } from "rxjs/operators";

import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  NgForm,
} from "@angular/forms";
import { FormSuccessComponent } from "../form-success/form-success.component";
import { FormSubmitServiceService } from "src/app/shared/services/form-submit-service.service";

@Component({
  selector: "app-shipping-details",
  templateUrl: "./shipping-details.component.html",
  styleUrls: ["./shipping-details.component.scss"],
})
export class ShippingDetailsComponent implements OnInit {
  userDetails: any;

  userDetail: any;

  products: Product[];

  FormData: FormGroup;

  constructor(
    private builder: FormBuilder,
    private contact: FormSubmitServiceService,
    authService: AuthService,
    private shippingService: ShippingService,
    productService: ProductService,
    private router: Router
  ) {
    /* Hiding products Element */

    this.userDetail = new UserDetail();
    this.products = productService.getLocalCartProducts();
    authService.user$.pipe(
      map((user) => {
        this.userDetails = user;
      })
    );
  }

  ngOnInit() {
    this.FormData = this.builder.group({
      Fullname: new FormControl("", [Validators.required]),
      Email: new FormControl("", [
        Validators.compose([Validators.required, Validators.email]),
      ]),
      Comment: new FormControl("", [Validators.required]),
    });
  }

  onSubmit(FormData) {
    console.log(FormData);

    const products = [];
    let totalPrice = 0;
    this.products.forEach((product) => {
      delete product.$key;
      totalPrice += product.productPrice;
      products.push(product);
    });
    const data = {
      ...FormData.value,

      products,
      totalPrice,
      shippingDate: Date.now(),
    };

    this.contact.PostMessage(data).subscribe(
      (response) => {
        location.href = "https://mailthis.to/confirm";
        console.log(response);
      },
      (error) => {
        console.warn(error.responseText);
        console.log({ error });
      }
    );
  }

  updateUserDetails(form: NgForm) {
    const products = [];
    let totalPrice = 0;
    this.products.forEach((product) => {
      delete product.$key;
      totalPrice += product.productPrice;
      products.push(product);
    });
    const data = {
      ...form.value,
      emailId: this.userDetails.emailId,
      userId: this.userDetails.$key,
      products,
      totalPrice,
      shippingDate: Date.now(),
    };

    this.shippingService.createshippings(data);

    this.router.navigate([
      "checkouts",
      { outlets: { checkOutlet: ["billing-details"] } },
    ]);
  }
}
