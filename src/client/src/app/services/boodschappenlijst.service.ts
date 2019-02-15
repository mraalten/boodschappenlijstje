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
            this.informSubscribers();
        }
    }

    private informSubscribers() {
        this.itemListObserver.next();
    }

    increment(itemId: number) {
        var item = this.itemMap.get(itemId);
        item.increment();
        this.informSubscribers();
    }

    decrement(itemId: number) {
        var item = this.itemMap.get(itemId);
        item.decrement();
        this.informSubscribers();
    }

    deleteFromList(itemId: number) {
        if (this.itemMap.has(itemId)) {
            this.itemMap.delete(itemId);
            this.informSubscribers()
        } else {
            alert('Het te verwijderen product staat niet (meer) op je lijstje');
        }
    }

    getNumberOfItemsOnList(productId: number) {
        let boodschappenlijstItem = this.itemMap.get(productId);
        if (boodschappenlijstItem == undefined) {
            return 0;
        }
        return boodschappenlijstItem.aantal;
    }

}
