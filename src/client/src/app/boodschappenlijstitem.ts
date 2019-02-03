import {Product} from "./product";

export class BoodschappenlijstItem {
    public id: number;
    public product: Product;
    private aantal: number;

    constructor(id: number, product: Product
    ){
        this.id = id;
        this.product = product;
        this.aantal = 1;
    }

}
