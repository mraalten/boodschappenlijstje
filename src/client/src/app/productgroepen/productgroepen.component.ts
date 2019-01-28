import { Component, OnInit } from '@angular/core';
import {ProductGroep} from "../productgroep";

@Component({
  selector: 'productgroepen',
  templateUrl: './productgroepen.component.html',
  styleUrls: ['./productgroepen.component.css']
})
export class ProductgroepenComponent implements OnInit {

  productGroepen: ProductGroep[];

  constructor() {
    this.productGroepen = [
        new ProductGroep(1, 'groenten-fruit.jpg', 'Groenten'),
        new ProductGroep(2, 'koffie.jpg', 'Koffie'),
        new ProductGroep(3, 'vlees.png', 'Vlees'),
        new ProductGroep(4, 'bakprodukten.jpg', 'Bakproducten')
    ];
  }

  ngOnInit() {
  }

}
