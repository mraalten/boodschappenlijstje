import {Component} from '@angular/core';
import {Product} from "../product";

@Component({
  selector: 'boodschappenlijst-producten',
  templateUrl: './boodschappenlijst-producten.component.html',
  styleUrls: ['./boodschappenlijst-producten.component.css']
})
export class BoodschappenlijstProductenComponent {

    constructor() {
    }

    productWasSelected(product: Product): void {
        console.log('Top-level: ' + product.naam)
    }

}
