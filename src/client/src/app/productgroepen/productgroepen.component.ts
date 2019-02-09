import { Component, OnInit } from '@angular/core';
import {ProductGroep} from "../productgroep";
import {ProductGroepenService} from "../services/productgroepen.service";

@Component({
  selector: 'productgroepen',
  templateUrl: './productgroepen.component.html',
  styleUrls: ['./productgroepen.component.css']
})
export class ProductgroepenComponent implements OnInit {

  productGroepen: ProductGroep[];

  constructor(
      private productGroepenService: ProductGroepenService
  ) {
    this.productGroepen = productGroepenService.getProductGroepen();
  }

  ngOnInit() {
  }

}
