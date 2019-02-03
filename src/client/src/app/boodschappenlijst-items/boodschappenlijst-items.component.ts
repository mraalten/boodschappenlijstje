import {Component, Input} from '@angular/core';
import {BoodschappenlijstItem} from "../boodschappenlijstitem";

@Component({
  selector: 'boodschappenlijst-items',
  templateUrl: './boodschappenlijst-items.component.html',
  styleUrls: ['./boodschappenlijst-items.component.css']
})
export class BoodschappenlijstItemsComponent {

    @Input() items: BoodschappenlijstItem[];

    constructor() {
    }


}
