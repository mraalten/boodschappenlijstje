import {Component, OnInit} from '@angular/core';
import {Product} from "../product";

@Component({
  selector: 'producten',
  templateUrl: './producten.component.html',
  styleUrls: ['./producten.component.css']
})
export class ProductenComponent implements OnInit {

    producten: Product[];

    constructor() {
        this.producten = [
            new Product(1, 'Sla', 'sla.jpg', 'krop'),
            new Product(2, 'Schwarzwalder Schinken', 'schwarzwalder-schinken.jpg', 'stuk')
        ];
    }
  ngOnInit() {
  }

}
