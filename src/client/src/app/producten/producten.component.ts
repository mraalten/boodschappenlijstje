import {Component, OnInit} from '@angular/core';
import {Product} from "../product";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'producten',
  templateUrl: './producten.component.html',
  styleUrls: ['./producten.component.css']
})
export class ProductenComponent implements OnInit {
    selectedProductGroepId: number;
    producten: Product[];

    constructor(private route: ActivatedRoute) {
        route.params.subscribe(params => {this.selectedProductGroepId = params['productGroepId']})
        console.log(('received productGroepId: ' + this.selectedProductGroepId));
        this.producten = [
            new Product(1, 'Sla', 'sla.jpg', 'krop'),
            new Product(2, 'Schwarzwalder Schinken', 'schwarzwalder-schinken.jpg', 'stuk')
        ];
    }
  ngOnInit() {
  }

}
