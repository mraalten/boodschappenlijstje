import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {Product} from "../product";
import {BoodschappenlijstItem} from "../boodschappenlijstitem";
import {RestService} from "./rest-service";

@Injectable()
export class BoodschappenlijstService {
    private UPDATE_ITEM_URL: string = '/updateItem';
    private DELETE_ITEM_URL: string = '/deleteItem';
    private CLEAR_LIST_URL: string  = '/clearList';

    private GET_BOODSCHAPPENLIJST_ITEMS_URL: string = '/getItems';
    itemMap = new Map<number, BoodschappenlijstItem>();
    itemListObserver = new Subject();

    constructor(
        private restService : RestService
    ) {
        this.restService.get(this.GET_BOODSCHAPPENLIJST_ITEMS_URL)
            .subscribe( (data: BoodschappenlijstItem[]) => {
                this.toBoodschappenlijstMap(data);
                this.itemListObserver.next();
            });
    }

    getBoodschappenLijstItems(): BoodschappenlijstItem[] {
        return Array.from(this.itemMap.values());
    }

    addProductToList(product: Product) {
        if (this.itemMap.get(product.id)) {
            alert(product.naam + ' staat al op je lijstje. Gebruik + om het aantal te verhogen');
        } else {
            let boodschappenLijstItem = new BoodschappenlijstItem(product.id, product, 1);
            this.itemMap.set(product.id, boodschappenLijstItem);
            this.informSubscribers();
            this.save(boodschappenLijstItem);
        }
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
            this.informSubscribers();
            this.restService.post(this.DELETE_ITEM_URL, itemId);
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

    private toBoodschappenlijstMap(items: BoodschappenlijstItem[]) {
        let itemIterator = items.values();
        let itemResult = itemIterator.next();
        while (!itemResult.done) {
            let item = itemResult.value;
            this.itemMap.set(item.product.id, new BoodschappenlijstItem(item.id, item.product, item.aantal));
            itemResult = itemIterator.next();
        }
    }

    clearList() {
        this.itemMap = new Map<number, BoodschappenlijstItem>();
        this.restService.post(this.CLEAR_LIST_URL, null);
        this.informSubscribers();
    }
}
