import {Component, Input, OnInit} from '@angular/core';
import {BoodschappenlijstItem} from "../boodschappenlijstitem";

@Component({
  selector: 'boodschappenlijst-item',
  templateUrl: './boodschappenlijst-item.component.html',
  styleUrls: ['./boodschappenlijst-item.component.css']
})

export class BoodschappenlijstItemComponent implements OnInit {

  @Input() item: BoodschappenlijstItem;

  constructor() { }

  ngOnInit() {
  }

}
