import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'product-knoppen',
  templateUrl: './product-knoppen.component.html',
  styleUrls: ['./product-knoppen.component.css']
})
export class ProductKnoppenComponent implements OnInit {
  @Input() selectedProductGroepId: number;

  constructor() { }

  ngOnInit() {
  }

}
