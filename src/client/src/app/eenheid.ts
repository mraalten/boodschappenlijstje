interface EnumIdentity { }

export class Eenheid implements EnumIdentity {

    private static AllValues: { [name: string] : Eenheid } = {};

    static readonly KILO = new Eenheid("kilo", 1, 1);
    static readonly GRAM = new Eenheid('gr.', 300, 100);
    static readonly POT_KLEIN = new Eenheid('potje', 1, 1);
    static readonly POT_GROOT = new Eenheid('pot', 1, 1);
    static readonly STUKS = new Eenheid('st.', 1, 1);
    static readonly ZAK = new Eenheid('zak', 1, 1);
    static readonly BLIK_KLEIN = new Eenheid('blikje', 1, 1);
    static readonly BLIK_GROOT = new Eenheid('blik', 1, 1);
    static readonly LITER = new Eenheid('ltr', 1, 1);
    static readonly TROS = new Eenheid('tros', 1, 1);
    static readonly FLES = new Eenheid('fl.', 1, 1);
    static readonly PAK = new Eenheid('pak', 1, 1);
    static readonly DOOS = new Eenheid('ds.', 1, 1);

    private constructor(
        public readonly displayValue: string,
        public readonly defaultQuantity: number,
        public readonly plusQuantity: number
    ) {
        Eenheid.AllValues[displayValue] = this;
    }

    public static parseEnum(data: string) : Eenheid {
        return Eenheid.AllValues[data];
    }

    public static allValues() : Eenheid[] {
        //TODO use the allValues from enum instead of hardcode all
        return [
            this.KILO,
            this.GRAM,
            this.POT_KLEIN,
            this.POT_GROOT,
            this.STUKS,
            this.ZAK,
            this.BLIK_KLEIN,
            this.BLIK_GROOT,
            this.LITER,
            this.TROS,
            this.FLES,
            this.PAK,
            this.DOOS
        ];
    }
}
