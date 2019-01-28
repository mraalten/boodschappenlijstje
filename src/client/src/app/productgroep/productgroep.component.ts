import {Component, Input, OnInit} from '@angular/core';
import {ProductGroep} from "../productgroep";

@Component({
  selector: 'productgroep',
  templateUrl: './productgroep.component.html',
  styleUrls: ['./productgroep.component.css']
})
export class ProductgroepComponent implements OnInit {
  @Input() productGroep: ProductGroep;

  constructor() { }

  ngOnInit() {
  }

}
