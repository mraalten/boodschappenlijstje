import {Injectable, OnInit} from "@angular/core";
import {Product} from "../product";
import {Eenheid} from "../eenheid";
import {Subject} from "rxjs";
import {RestService} from "./rest-service";

@Injectable()
export class ProductenService {
    private GET_PRODUCT_URL: string = '/products';
    private GET_EENHEDEN_URL : string = '/eenheden';
    private SAVE_PRODUCT_URL: string = '/saveProduct';
    private DELETE_PRODUCT_URL: string = '/deleteProduct';

    productenMap = new Map<number, Product>();
    productenObserver = new Subject();
    eenheden = [];

    constructor(
        private restService : RestService
    ) {
        this.restService.get(this.GET_PRODUCT_URL)
             .subscribe( (data: Product[]) => {
                 this.toProductenMap(data);
                 this.productenObserver.next();
             });
        this.restService.get(this.GET_EENHEDEN_URL)
            .subscribe( (data: Eenheid[]) => {
                this.eenheden = data;
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

    addNewProduct(productGroepId: number, productName: string, imageName: string, newEenheid: Eenheid): Product {
        let productIterator = this.productenMap.values();
        let productResult = productIterator.next();
        let highestId = 0;
        while (!productResult.done) {
            let product = productResult.value;
            if (product.id > highestId) {
                highestId = product.id;
            }
            productResult = productIterator.next();
        }
        highestId = Number(highestId) + 1;
        let newProduct = new Product(highestId, productName, imageName, newEenheid, productGroepId);
        this.productenMap.set(newProduct.id, newProduct);
        this.save(newProduct);
        return newProduct;
    }
    
    getProducten(): Product[] {
        return Array.from(this.productenMap.values());
    }

    getEenheden(): Eenheid[] {
        return this.eenheden;
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

    editProduct(selectedProductId: number, newProductName: string, newImageName: string, newEenheid: Eenheid) {
         var product = this.getProduct(selectedProductId);
         if (product.naam != newProductName || product.eenheid != newEenheid || product.imageNaam != newImageName) {
              product.naam = newProductName;
              product.eenheid = newEenheid;
              product.imageNaam = newImageName;
              this.productenMap.set(selectedProductId, product);
              this.save(product);
         }
    }

     delete(productId: number) {
         this.productenMap.delete(productId);
         this.deleteProduct(productId);
         this.productenObserver.next();
     }

    toEenheid(eenheidAsString: String): Eenheid {
        let eenheid;
        this.eenheden.forEach( (value: Eenheid) => {
            if (value.displayValue == eenheidAsString) {
                eenheid = value;
            }
        });
        return eenheid;
    }

    private save(newProduct: Product) {
        this.restService.post(this.SAVE_PRODUCT_URL, newProduct);
    }

    private deleteProduct(productId: number) {
        this.restService.post(this.DELETE_PRODUCT_URL, productId);
    }
}
