package nl.aalten.boodschappenlijst.product;

import java.util.List;

import nl.aalten.boodschappenlijst.domain.ProductGroep;

public interface Repository {

     List<Product> getProducts();

     List<ProductGroep> getProductGroups();

}
