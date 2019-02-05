import {Component, Input, OnInit} from '@angular/core';
import {BoodschappenlijstItem} from "../boodschappenlijstitem";
import {BoodschappenlijstService} from "../boodschappenlijst.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'boodschappenlijst-items',
  templateUrl: './boodschappenlijst-items.component.html',
  styleUrls: ['./boodschappenlijst-items.component.css']
})
export class BoodschappenlijstItemsComponent implements OnInit {

    subscription: Subscription;

    items: BoodschappenlijstItem[];

    constructor(private boodschappenLijstService: BoodschappenlijstService) {
        this.items = this.boodschappenLijstService.getBoodschappenLijstItems();
    }

    ngOnInit(): void {
        this.subscription = this.boodschappenLijstService.itemListObserver.subscribe(() => {
            this.items = this.boodschappenLijstService.getBoodschappenLijstItems()
        });
    }


}
