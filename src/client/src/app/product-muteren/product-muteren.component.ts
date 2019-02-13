import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductenService} from "../services/producten.service";
import {Product} from "../product";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Eenheid} from "../eenheid";

@Component({
  selector: 'product-muteren',
  templateUrl: './product-muteren.component.html',
  styleUrls: ['./product-muteren.component.css']
})
export class ProductMuterenComponent implements OnInit {
  selectedProductId: number;
  product: Product;
  editForm: FormGroup;
  eenheden: Eenheid[];

  constructor(
      private route: ActivatedRoute,
      private productenService: ProductenService,
      private router: Router,
      formBuilder: FormBuilder

  ) {
      route.params.subscribe(params => {this.selectedProductId = Number(params['productId'])})
      this.product = productenService.getProduct(this.selectedProductId);
      this.editForm = formBuilder.group({
         'productName' : [this.product.naam, Validators.required],
         'newEenheid' : [this.product.eenheid.displayValue, Validators.required]
      });
      this.eenheden = Eenheid.allValues();
  }

  onSubmit(form: any): void {
    if (this.editForm.valid) {
      var newProductName = this.editForm.get("productName").value;
      var newEenheid = this.editForm.get("newEenheid").value;
      this.productenService.editProduct(this.selectedProductId, newProductName, Eenheid.parseEnum(newEenheid));
      this.backToSelectedProductGroup();
    }
  }

  cancelEditing() : void {
      this.backToSelectedProductGroup();
  }

  private backToSelectedProductGroup() {
      this.router.navigate(['/products', this.product.productGroepid]);
  }

  ngOnInit() {
  }

}
