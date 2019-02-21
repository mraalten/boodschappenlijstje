interface EnumIdentity { }

export class Eenheid implements EnumIdentity {

    public constructor(
        public displayValue: string,
        public defaultQuantity: number,
        public plusQuantity: number
    ) {}

}
