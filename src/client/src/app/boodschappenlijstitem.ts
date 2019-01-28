import {Product} from "./product";

export class BoodschappenlijstItem {

    constructor(
        public id: number,
        public product: Product,
        public aantal: number
    ){}

}
