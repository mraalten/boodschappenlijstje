package nl.aalten.boodschappenlijst.domain;

import com.fasterxml.jackson.annotation.JsonFormat;

@JsonFormat(shape= JsonFormat.Shape.OBJECT)
public enum Eenheid {
    KILO(1L, "kilo", 1, 1),
    GRAM(2L, "gr.", 300, 100),
    POT_KLEIN(3L, "potje", 1, 1),
    POT_GROOT(4L, "pot", 1, 1),
    STUKS(5L, "st.", 1, 1),
    ZAK(6L, "zak", 1, 1),
    BLIK_KLEIN(7L, "blikje", 1, 1),
    BLIK_GROOT(10L, "blik", 1, 1),
    LITER(8L, "ltr", 1, 1),
    TROS(9L, "tros", 1, 1),
    FLES(11L, "fl.", 1, 1),
    PAK(12L, "pak", 1, 1),
    DOOS(13L, "ds.", 1, 1);

    private Long id;
    private String displayValue;
    private Integer defaultQuantity;
    private Integer plusQuantity;


    private Eenheid(Long id, String displayValue, Integer defaultQuantity,  Integer plusQuantity) {
        this.id = id;
        this.displayValue = displayValue;
        this.defaultQuantity = defaultQuantity;
        this.plusQuantity = plusQuantity;
    }

    public Long getId() {
        return id;
    }

    public String getDisplayValue() {
        return displayValue;
    }

    public Integer getDefaultQuantity() {
        return defaultQuantity;
    }

    public Integer getPlusQuantity() {
        return plusQuantity;
    }
}
