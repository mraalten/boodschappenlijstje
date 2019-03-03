import { Component, OnInit } from '@angular/core';
import {BoodschappenlijstService} from "../services/boodschappenlijst.service";
import { environment } from '../../environments/environment';

@Component({
  selector: 'boodschappenlijst-knoppen',
  templateUrl: './boodschappenlijst-knoppen.component.html',
  styleUrls: ['./boodschappenlijst-knoppen.component.css']
})
export class BoodschappenlijstKnoppenComponent implements OnInit {

  constructor(
      private boodschappenLijstService: BoodschappenlijstService
  ) { }

  clearList() : void {
    if (confirm('Weet je zeker dat de boodschappenlijst leeg wilt maken ?')) {
      this.boodschappenLijstService.clearList();
    }
  }

  createPdf() : void {
    if (this.boodschappenLijstService.hasItems()) {
      window.open(environment.hostname + environment.downloadListUrl);
    } else {
      alert('Geen boodschappen aanwezig op lijstje');
    }
  }

  ngOnInit() {
  }

}
