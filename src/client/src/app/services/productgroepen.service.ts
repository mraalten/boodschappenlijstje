import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {Product} from "../product";
import {BoodschappenlijstItem} from "../boodschappenlijstitem";
import {ProductGroep} from "../productgroep";

@Injectable()
export class ProductGroepenService {
    productGroepenMap = new Map<number, ProductGroep>();
    productGroepenObserver = new Subject();

    constructor() {
        this.addNewProductGroep(new ProductGroep(1,'Groenten','groenten-fruit.jpg', 10));
        this.addNewProductGroep(new ProductGroep(2   ,'Fruit','fruit.jpg', 20));
        this.addNewProductGroep(new ProductGroep( 3  ,'Potgroenten','potgroenten.jpg', 40));
        this.addNewProductGroep(new ProductGroep( 4  ,'Zuivel/boter','zuivel.jpg', 79));
        this.addNewProductGroep(new ProductGroep( 5  ,'Pastasauzen/pasta','pasta.jpg   ', 77));
        this.addNewProductGroep(new ProductGroep( 6  ,'Vlees','vlees.png    ', 45));
        this.addNewProductGroep(new ProductGroep( 7  ,'Vleeswaren','vleeswaren.jpg', 50));
        this.addNewProductGroep(new ProductGroep( 8  ,'Zuren','zuren.jpg      ', 75));
        this.addNewProductGroep(new ProductGroep( 9  ,'Kaas','kaas.jpg', 55));
        this.addNewProductGroep(new ProductGroep(  10,'Frisdrank','frisdranken.jpg ',100));
        this.addNewProductGroep(new ProductGroep(  11,'Sappen','sappen.jpg        ',110));
        this.addNewProductGroep(new ProductGroep(  12,'Chips','chips.jpg',120));
        this.addNewProductGroep(new ProductGroep(  13,'Was/schoonmaakmiddel','wasmiddel.png     ', 80));
        this.addNewProductGroep(new ProductGroep(  14,'Koek en snoep','koek-snoep.jpg    ',116));
        this.addNewProductGroep(new ProductGroep(  15,'Verzorging','verzorging.jpg    ', 85));
        this.addNewProductGroep(new ProductGroep(  16,'Koffie','koffie.jpg        ',115));
        this.addNewProductGroep(new ProductGroep(  17,'Bakprodukten','bakprodukten.jpg  ', 64));
        this.addNewProductGroep(new ProductGroep(  18,'Broodbeleg','broodbeleg.jpg    ', 65));
        this.addNewProductGroep(new ProductGroep(  19,'Ontbijt','ontbijt.jpg       ', 60));
        this.addNewProductGroep(new ProductGroep(  20,'Diepvries','diepvries.png     ', 66));
        this.addNewProductGroep(new ProductGroep(  21,'Soep','soepen.jpg        ', 71));
        this.addNewProductGroep(new ProductGroep(  22,'Vleesconserven','vleesconserven.jpg', 72));
        this.addNewProductGroep(new ProductGroep(  23,'Mixen/werelds','mixen.jpg', 73));
        this.addNewProductGroep(new ProductGroep(  24,'Rijst/mie','rijst.jpg ', 74));
        this.addNewProductGroep(new ProductGroep(  25,'Sauzen','sauzen.jpg ', 76));
    }

    addNewProductGroep(productGroep: ProductGroep) : void {
        this.productGroepenMap.set(productGroep.id, productGroep);    
    }
    
    getProductGroepen(): ProductGroep[] {
        return Array.from(this.productGroepenMap.values());
    }

}
