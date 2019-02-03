import {Component, EventEmitter, Output} from '@angular/core';
import {Product} from "../product";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'producten',
  templateUrl: './producten.component.html',
  styleUrls: ['./producten.component.css']
})
export class ProductenComponent {
    selectedProductGroepId: number;
    producten: Product[];

    constructor(private route: ActivatedRoute) {
        this.onProductSelected = new EventEmitter();
        route.params.subscribe(params => {this.selectedProductGroepId = params['productGroepId']})
        console.log(('received productGroepId: ' + this.selectedProductGroepId));
        this.producten = [
            new Product(1, 'Sla', 'sla.jpg', 'krop'),
            new Product(2, 'Schwarzwalder Schinken', 'schwarzwalder-schinken.jpg', 'stuk')
        ];
    }

    @Output() onProductSelected: EventEmitter<Product>;

    productSelected(product: Product) {
        console.log('subscribers: ' + this.onProductSelected.observers.toString());
        this.onProductSelected.emit(product);
        console.log('In producten: ' + product.naam);
    }

}
