import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from "../product";
import {ActivatedRoute} from "@angular/router";
import {BoodschappenlijstService} from "../services/boodschappenlijst.service";
import {ProductenService} from "../services/producten.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'producten',
  templateUrl: './producten.component.html',
  styleUrls: ['./producten.component.css']
})
export class ProductenComponent implements OnInit {
    selectedProductGroepId: number;
    producten: Product[];
    subscription: Subscription;

    constructor(
        private route: ActivatedRoute,
        private boodschappenLijstService: BoodschappenlijstService,
        private productenService: ProductenService
    ) {
        this.onProductSelected = new EventEmitter();
        route.params.subscribe(params => {this.selectedProductGroepId = params['productGroepId']});
    }

    @Output() onProductSelected: EventEmitter<Product>;

    ngOnInit(): void {
        this.producten = this.productenService.getProductenFor(this.selectedProductGroepId); // needed for initial refresh or page will stay empty

        this.subscription = this.productenService.productenObserver.subscribe(() => {
            this.producten = this.productenService.getProductenFor(this.selectedProductGroepId);
        });
    }

}
