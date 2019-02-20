import { Component, OnInit } from '@angular/core';
import {ProductGroep} from "../productgroep";
import {ProductGroepenService} from "../services/productgroepen.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'productgroepen',
  templateUrl: './productgroepen.component.html',
  styleUrls: ['./productgroepen.component.css']
})
export class ProductgroepenComponent implements OnInit {
  productGroepen: ProductGroep[];
  subscription: Subscription;

  constructor(
      private productGroepenService: ProductGroepenService
  ) {
    this.productGroepen = productGroepenService.getProductGroepen();
  }

  ngOnInit() {
    this.productGroepen = this.productGroepenService.getProductGroepen();

    this.subscription = this.productGroepenService.productGroepenObserver.subscribe(() => {
      this.productGroepen = this.productGroepenService.getProductGroepen();
    });
  }

}
