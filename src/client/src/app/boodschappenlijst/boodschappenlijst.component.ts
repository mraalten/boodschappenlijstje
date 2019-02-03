import { Component, OnInit } from '@angular/core';
import {BoodschappenlijstItem} from "../boodschappenlijstitem";
import {Product} from "../product";

@Component({
  selector: 'boodschappenlijst',
  templateUrl: './boodschappenlijst.component.html',
  styleUrls: ['./boodschappenlijst.component.css']
})
export class BoodschappenlijstComponent implements OnInit {

    itemMap = new Map();

    items: BoodschappenlijstItem[];

    constructor() {
        this.itemMap.set(1, new BoodschappenlijstItem(1, new Product(1, 'Sla', 'sla.jpg', 'krop')));
        this.itemMap.set(2, new BoodschappenlijstItem(2, new Product(2, 'Schwarzwalder Schinken', 'komkommer.jpg', 'stuk')));
        this.items = [
            new BoodschappenlijstItem(1, new Product(1, 'Sla', 'sla.jpg', 'krop')),
            new BoodschappenlijstItem(2, new Product(2, 'Schwarzwalder Schinken', 'komkommer.jpg', 'stuk'))
        ];
    }

  ngOnInit() {
  }

}
