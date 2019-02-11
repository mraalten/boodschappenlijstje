import {Component, Input} from '@angular/core';
import {Product} from "../product";
import {BoodschappenlijstService} from "../services/boodschappenlijst.service";
import {Router} from "@angular/router";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
 @Input() product: Product;

    constructor(
        private boodschappenLijstService: BoodschappenlijstService,
        private router: Router
    ) {}

    productSelected(product: Product) {
        this.boodschappenLijstService.addProduct(product);
    }

    editProduct(product: Product) {
        this.router.navigate(['/editproduct', product.id]);
    }
}
