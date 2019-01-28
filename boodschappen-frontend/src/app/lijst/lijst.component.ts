import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../domain/item";

@Component({
    selector: 'lijst',
    templateUrl: './lijst.component.html',
    styleUrls: ['./lijst.component.css']
})
export class LijstComponent implements OnInit {

    @Input() items: Item[];

    constructor() {
    }

    ngOnInit() {
    }

}
