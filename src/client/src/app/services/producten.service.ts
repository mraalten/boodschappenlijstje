import {Injectable, OnInit} from "@angular/core";
import {Product} from "../product";
import {Eenheid} from "../eenheid";
import {Subject} from "rxjs";
import {RestService} from "./rest-service";

@Injectable()
export class ProductenService {
    productenMap = new Map<number, Product>();
    productenObserver = new Subject();

    constructor(
        private restService : RestService
    ) {
         this.restService.get('/products')
             .subscribe( (data: Product[]) => {
                 this.toProductenMap(data);
                 this.productenObserver.next();
             });
    }

    private toProductenMap(products: Product[]) {
        let productIterator = products.values();
        let productResult = productIterator.next();
        while (!productResult.done) {
            let product = productResult.value;
            this.productenMap.set(product.id, product);
            productResult = productIterator.next();
        }
    }

    addNewProduct(product: Product): void {
        this.productenMap.set(product.id, product);
    }
    
    getProducten(): Product[] {
        return Array.from(this.productenMap.values());
    }

    getProductenFor(productGroepId: number): Product[] {
        var productIterator = this.productenMap.values();
        var productResult = productIterator.next();
        var productsForGroupId = [];

        while (!productResult.done) {
            var product = productResult.value;
            if (product.productGroepId == productGroepId) {
                productsForGroupId.push(product);
            }
            productResult = productIterator.next();
        }
        return productsForGroupId;
    }

    getProduct(selectedProductId: number) : Product {
         return this.productenMap.get(selectedProductId);
    }

    editProduct(selectedProductId: number, newProductName: string, newEenheid: Eenheid) {
         var product = this.getProduct(selectedProductId);
         if (product.naam != newProductName || product.eenheid != newEenheid) {
              product.naam = newProductName;
              product.eenheid = newEenheid;
              this.productenMap.set(selectedProductId, product);
         }
    }

     delete(productId: number) {
         this.productenMap.delete(productId);
         this.productenObserver.next();
     }

}
