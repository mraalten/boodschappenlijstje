import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductenService} from "../services/producten.service";
import {Product} from "../product";

@Component({
  selector: 'product-muteren',
  templateUrl: './product-muteren.component.html',
  styleUrls: ['./product-muteren.component.css']
})
export class ProductMuterenComponent implements OnInit {
  selectedProductId: number;
  product: Product;

  constructor(
      private route: ActivatedRoute,
      private productenService: ProductenService,
      private router: Router

  ) {
      route.params.subscribe(params => {this.selectedProductId = params['productId']})
      this.product = productenService.getProduct(this.selectedProductId);
  }

  onSubmit(form: any): void {
    console.log('Form submitted with ', form);
  }

  cancelEditing() : void {
      this.router.navigate(['/products', this.product.productGroepid]);
  }

  ngOnInit() {
  }

}
