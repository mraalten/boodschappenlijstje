import {Component, Input, OnInit} from '@angular/core';
import {BoodschappenlijstItem} from "../boodschappenlijstitem";
import {BoodschappenlijstService} from "../services/boodschappenlijst.service";

@Component({
  selector: 'boodschappenlijst-item',
  templateUrl: './boodschappenlijst-item.component.html',
  styleUrls: ['./boodschappenlijst-item.component.css']
})

export class BoodschappenlijstItemComponent implements OnInit {

  @Input() item: BoodschappenlijstItem;

  constructor(
      private boodschappenLijstService: BoodschappenlijstService
  ) { }

  decrement(itemId: number) : void {
    this.boodschappenLijstService.decrement(itemId);
  }

  increment(itemId: number) : void {
    this.boodschappenLijstService.increment(itemId);
  }

  deleteFromList(itemId: number) {
    this.boodschappenLijstService.deleteFromList(itemId);
  }

  ngOnInit() {
  }

}
