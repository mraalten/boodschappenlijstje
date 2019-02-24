package nl.aalten.boodschappenlijst.storage;

import java.util.List;

import nl.aalten.boodschappenlijst.domain.BoodschappenlijstItem;
import nl.aalten.boodschappenlijst.domain.Product;
import nl.aalten.boodschappenlijst.domain.ProductGroep;

public interface Repository {

     List<Product> getProducts();

     Product getProduct(Long productId);

     List<ProductGroep> getProductGroups();

     void updateItem(BoodschappenlijstItem boodschappenlijstItem);

     void deleteItem(Long itemId);

     List<BoodschappenlijstItem> getBoodschappenlijstItems();

     void clearList();

}
