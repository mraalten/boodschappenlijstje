import {BoodschappenlijstItem} from "./boodschappenlijstitem";
import {Product} from "./product";
import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";

@Injectable()
export class BoodschappenlijstService {
    itemMap = new Map<number, BoodschappenlijstItem>();
    itemListObserver = new Subject();

    constructor() {
        this.itemMap.set(1, new BoodschappenlijstItem(1, new Product(1, 'Sla', 'sla.jpg', 'krop', 1)));
        // this.itemMap.set(2, new BoodschappenlijstItem(2, new Product(2, 'Schwarzwalder Schinken', 'komkommer.jpg', 'stuk')));
    }

    getBoodschappenLijstItems(): BoodschappenlijstItem[] {
        return Array.from(this.itemMap.values());
    }

    addProduct(product: Product) {
        this.itemMap.set(3, new BoodschappenlijstItem(2, product));
        this.itemListObserver.next();
    }
}
