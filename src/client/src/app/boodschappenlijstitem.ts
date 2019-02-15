import {Product} from "./product";

export class BoodschappenlijstItem {
    public id: number;
    public product: Product;
    public aantal: number;

    constructor(
        id: number, product: Product
    ){
        this.id = id;
        this.product = product;
        this.aantal = 1;
    }

    increment() {
        this.aantal = this.aantal + 1;
    }

    decrement() {
        if (this.aantal < 2) {
            alert('Verwijder ' + this.product.naam + ' door de Prullenmand voor het artikel te gebruiken.');
        } else {
            this.aantal = this.aantal - 1;
        }
    }

}
