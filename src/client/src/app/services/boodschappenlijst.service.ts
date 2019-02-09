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
        if (this.itemMap.get(product.id)) {
            alert(product.naam + ' staat al op je lijstje. Gebruik + om het aantal te verhogen');
        } else {
            this.itemMap.set(product.id, new BoodschappenlijstItem(2, product));
            this.itemListObserver.next();
        }
    }
}
