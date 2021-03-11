import { Product } from "../../../../shared/models/product";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../../../../shared/services/product.service";
import { ToastrService } from "src/app/shared/services/toastr.service";
@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.scss"],
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  private sub: any;
  product: Product;
  qt: number = 1;
  prodImages: any;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private toastrService: ToastrService
  ) {
    this.product = new Product();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      const id = params.id; // (+) converts string 'id' to a number
      this.getProductDetail(id);
    });
  }

  getProductDetail(id: string) {
    const x = this.productService.getProductById(id);
    x.snapshotChanges().subscribe(
      (product) => {
        const y = { ...(product.payload.toJSON() as Product), $key: id };
        this.product = y;

        this.prodImages = Object.keys(
          this.product.productImageUrl
        ).map((key) => [this.product.productImageUrl[key]]);
      },
      (error) => {
        this.toastrService.error("Error while fetching Product Detail", error);
      }
    );
  }

  addToCart(product: Product, qt: number) {
    this.productService.addToCart(product, qt);
  }

  addQt() {
    this.qt += 1;
  }
  removeQt() {
    this.qt -= 1;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
