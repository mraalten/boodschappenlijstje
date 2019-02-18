package nl.aalten.boodschappenlijst.domain;

import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.annotation.XmlRootElement;

import nl.aalten.boodschappenlijst.product.Product;

@XmlRootElement
public class ProductGroep {

    private Long id;
    private String naam;
    private String imageNaam;
    private int sortOrder;

    private List<Product> produkten = new ArrayList();

    public ProductGroep(Long id, String naam, String imageNaam, int sortOrder) {
        this.id = id;
        this.naam = naam;
        this.imageNaam = imageNaam;
        this.sortOrder = sortOrder;
    }

    public void addProdukt(Product produkt) {
        if (produkt != null) {
            produkten.add(produkt);
        }

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

    public String getImageNaam() {
        return imageNaam;
    }

    public void setImageNaam(String imageNaam) {
        this.imageNaam = imageNaam;
    }

    public int getSortOrder() {
        return sortOrder;
    }

    public void setSortOrder(int sortOrder) {
        this.sortOrder = sortOrder;
    }

    public List<Product> getProdukten() {
        return produkten;
    }

    public void setProdukten(List<Product> produkten) {
        this.produkten = produkten;
    }
}
