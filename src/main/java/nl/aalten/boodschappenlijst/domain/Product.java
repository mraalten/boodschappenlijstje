package nl.aalten.boodschappenlijst.domain;

import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

import org.springframework.lang.Nullable;

@XmlRootElement
public class Product {

    private Long id;
    private String naam;
    @Nullable
    private String merk;
    private String imageNaam = "geen_afbeelding.jpg";
    private Long productGroepId;

    @XmlTransient
    private Eenheid eenheid;

    /**
     * No-args constructor needed for jaxson the instantiate object
     */
    public Product() {
    }

    public Product(long id, String naam, String imageNaam, Eenheid eenheid, Long productGroepId) {
        this.id = id;
        this.naam = naam;
        this.merk = merk;
        this.imageNaam = imageNaam;
        this.eenheid = eenheid;
        this.productGroepId = productGroepId;
    }

    public Product(long id, String naam, String merk, String imageNaam, Eenheid eenheid, Long productGroepId) {
        this.id = id;
        this.naam = naam;
        this.merk = merk;
        this.imageNaam = imageNaam;
        this.eenheid = eenheid;
        this.productGroepId = productGroepId;
    }

    @Override
    public String toString() {
        return "Product{" + "id=" + id + ", naam='" + naam + '\'' + ", merk='" + merk + '\'' + ", imageNaam='" + imageNaam + '\'' + ", productGroepId=" + productGroepId
                + ", eenheid=" + eenheid + '}';
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNaam() {
        return naam;
    }

    public void setNaam(String naam) {
        this.naam = naam;
    }

    public String getMerk() {
        return merk;
    }

    public void setMerk(String merk) {
        this.merk = merk;
    }

    public String getImageNaam() {
        return imageNaam;
    }

    public void setImageNaam(String imageNaam) {
        this.imageNaam = imageNaam;
    }

    public Eenheid getEenheid() {
        return eenheid;
    }

    public void setEenheid(Eenheid eenheid) {
        this.eenheid = eenheid;
    }

    public Long getProductGroepId() {
        return productGroepId;
    }

    public void setProductGroepId(Long productGroepId) {
        this.productGroepId = productGroepId;
    }
}
