export class Product {
  $key: string;
  productId: number;
  productName: string;
  productCategory: string;
  productPrice: number;
  productDescription: string;
  productImageUrl: string;
  productAvailable: boolean;
  productAdded: number;
  productQuatity: number;

  favourite: boolean;
  productSeller: string;
  cartqt?: number;
}
