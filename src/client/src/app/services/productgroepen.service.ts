import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {ProductGroep} from "../productgroep";
import {RestService} from "./rest-service";

@Injectable()
export class ProductGroepenService {
    productGroepenMap = new Map<number, ProductGroep>();
    productGroepenObserver = new Subject();

    constructor(
        private restService : RestService
    ) {
        this.restService.get('/productgroups')
            .subscribe( (data: ProductGroep[]) => {
                this.toProductGroepenMap(data);
                this.productGroepenObserver.next();
            });
    }

    addNewProductGroep(productGroep: ProductGroep) : void {
        this.productGroepenMap.set(productGroep.id, productGroep);    
    }
    
    getProductGroepen(): ProductGroep[] {
        return Array.from(this.productGroepenMap.values());
    }

    private toProductGroepenMap(productGroups: ProductGroep[]) {
        let productGroupIterator = productGroups.values();
        let productGroupResult = productGroupIterator.next();
        while (!productGroupResult.done) {
            let productGroup = productGroupResult.value;
            this.addNewProductGroep(productGroup);
            productGroupResult = productGroupIterator.next();
        }
    }
}
