import {Component, Input, OnInit} from '@angular/core';
import {BoodschappenlijstItem} from "../boodschappenlijstitem";
import {Product} from "../product";

@Component({
  selector: 'boodschappenlijst-items',
  templateUrl: './boodschappenlijst-items.component.html',
  styleUrls: ['./boodschappenlijst-items.component.css']
})
export class BoodschappenlijstItemsComponent implements OnInit {
    items: BoodschappenlijstItem[];

    constructor() {
        this.items = [
            new BoodschappenlijstItem(1, new Product(1, 'Sla', 'sla.jpg', 'krop'), 1),
            new BoodschappenlijstItem(2, new Product(2, 'Schwarzwalder Schinken', 'komkommer.jpg', 'stuk'), 1)
        ];
    }

  ngOnInit() {
  }

}
