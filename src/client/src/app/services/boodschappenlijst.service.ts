import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {Product} from "../product";
import {BoodschappenlijstItem} from "../boodschappenlijstitem";

@Injectable()
export class BoodschappenlijstService {
    itemMap = new Map<number, BoodschappenlijstItem>();
    itemListObserver = new Subject();

    constructor() {
    }

    getBoodschappenLijstItems(): BoodschappenlijstItem[] {
        return Array.from(this.itemMap.values());
    }

    addProduct(product: Product) {
        this.itemMap.set(3, new BoodschappenlijstItem(2, product));
        this.itemListObserver.next();
    }
}
