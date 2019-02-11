import {Component, EventEmitter, Output} from '@angular/core';
import {Product} from "../product";
import {ActivatedRoute} from "@angular/router";
import {BoodschappenlijstService} from "../services/boodschappenlijst.service";
import {ProductenService} from "../services/producten.service";

@Component({
  selector: 'producten',
  templateUrl: './producten.component.html',
  styleUrls: ['./producten.component.css']
})
export class ProductenComponent {
    selectedProductGroepId: number;
    producten: Product[];

    constructor(
        private route: ActivatedRoute,
        private boodschappenLijstService: BoodschappenlijstService,
        private productenService: ProductenService
    ) {
        this.onProductSelected = new EventEmitter();
        route.params.subscribe(params => {this.selectedProductGroepId = params['productGroepId']})
        this.producten = productenService.getProductenFor(this.selectedProductGroepId);
    }

    @Output() onProductSelected: EventEmitter<Product>;

}
