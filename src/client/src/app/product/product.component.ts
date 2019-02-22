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
    numberofItemsOnList: number;

    constructor(
        private boodschappenLijstService: BoodschappenlijstService,
        private productenService: ProductenService,
        private router: Router
    ) {
        this.subscription = this.boodschappenLijstService.itemListObserver.subscribe(() => {
            this.numberofItemsOnList = this.boodschappenLijstService.getNumberOfItemsOnList(this.product.id);
        });
    }

    productSelected(product: Product) {
        this.boodschappenLijstService.addProductToList(product);
    }

    editProduct(product: Product) {
        this.router.navigate(['/editproduct', product.id]);
    }

    ngOnInit(): void {
        this.numberofItemsOnList = this.boodschappenLijstService.getNumberOfItemsOnList(this.product.id);
    }

}
