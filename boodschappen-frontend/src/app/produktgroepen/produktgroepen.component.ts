import { Component, OnInit } from '@angular/core';
import {ProduktGroep} from "../domain/produktgroep";

@Component({
  selector: 'produktgroepen',
  templateUrl: './produktgroepen.component.html',
  styleUrls: ['./produktgroepen.component.css']
})
export class ProduktgroepenComponent implements OnInit {
  produktGroepen : ProduktGroep[];

  constructor() { }

  ngOnInit() {
    alert('Hello');
  }

}
