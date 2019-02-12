import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../product";
import {BoodschappenlijstService} from "../services/boodschappenlijst.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {ProductenService} from "../services/producten.service";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    @Input() product: Product;
    subscription: Subscription;

    constructor(
        private boodschappenLijstService: BoodschappenlijstService,
        private productenService: ProductenService,
        private router: Router
    ) {}

    productSelected(product: Product) {
        this.boodschappenLijstService.addProduct(product);
    }

    editProduct(product: Product) {
        this.router.navigate(['/editproduct', product.id]);
    }

    ngOnInit(): void {
        this.subscription = this.productenService.productenObserver.subscribe((changedProduct) => {
            console.log('changed product: ' + changedProduct);
        });
    }
}
