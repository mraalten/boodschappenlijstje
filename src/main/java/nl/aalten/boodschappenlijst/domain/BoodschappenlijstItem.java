package nl.aalten.boodschappenlijst.domain;

public class BoodschappenlijstItem {

    private Long id;
    private Product product;
    private Integer aantal;

    public BoodschappenlijstItem(Long id, Product product, Integer aantal) {
        this.id = id;
        this.product = product;
        this.aantal = aantal;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Integer getAantal() {
        return aantal;
    }

    public void setAantal(Integer aantal) {
        this.aantal = aantal;
    }

    @Override
    public String toString() {
        return "BoodschappenlijstItem{" + "id=" + id + ", product=" + product + ", aantal=" + aantal + '}';
    }

}
