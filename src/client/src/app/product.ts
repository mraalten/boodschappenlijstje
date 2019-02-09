import {Eenheid} from "./eenheid";

export class Product {

    constructor(
        public id: number,
        public naam: string,
        public imageNaam: string,
        public eenheid: Eenheid,
        public productGroepid: number,
    ){}

}
