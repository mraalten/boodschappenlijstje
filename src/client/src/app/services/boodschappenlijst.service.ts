import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {Product} from "../product";
import {BoodschappenlijstItem} from "../boodschappenlijstitem";
import {RestService} from "./rest-service";

@Injectable()
export class BoodschappenlijstService {
    private UPDATE_ITEM_URL: string = '/updateItem';

    itemMap = new Map<number, BoodschappenlijstItem>();
    itemListObserver = new Subject();

    constructor(
        private restService : RestService
    ) {}

    getBoodschappenLijstItems(): BoodschappenlijstItem[] {
        return Array.from(this.itemMap.values());
    }

    addProductToList(product: Product) {
        if (this.itemMap.get(product.id)) {
            alert(product.naam + ' staat al op je lijstje. Gebruik + om het aantal te verhogen');
        } else {
            let id = this.getNewId();
            let boodschappenLijstItem = new BoodschappenlijstItem(id, product);
            this.itemMap.set(product.id, boodschappenLijstItem);
            this.informSubscribers();
            this.save(boodschappenLijstItem);
        }
    }

    getNewId() : number {
        return this.itemMap.size + 1;
    }

    private informSubscribers() {
        this.itemListObserver.next();
    }

    increment(itemId: number) {
        var item = this.itemMap.get(itemId);
        item.increment();
        this.informSubscribers();
        this.save(item);
    }

    decrement(itemId: number) {
        var item = this.itemMap.get(itemId);
        item.decrement();
        this.informSubscribers();
        this.save(item);
    }

    deleteFromList(itemId: number) {
        if (this.itemMap.has(itemId)) {
            this.itemMap.delete(itemId);
            this.informSubscribers()

            // TODO delete item from server
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

    isItemOnList(productId: number) {
        return this.itemMap.has(productId);
    }

    private save(boodschappenLijstItem: BoodschappenlijstItem) {
        this.restService.post(this.UPDATE_ITEM_URL, boodschappenLijstItem);
    }
}
