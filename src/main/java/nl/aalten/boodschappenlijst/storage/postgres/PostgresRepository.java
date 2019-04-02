package nl.aalten.boodschappenlijst.storage.postgres;

import static java.lang.String.format;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import nl.aalten.boodschappenlijst.domain.BoodschappenlijstItem;
import nl.aalten.boodschappenlijst.domain.Product;
import nl.aalten.boodschappenlijst.domain.ProductGroep;
import nl.aalten.boodschappenlijst.storage.Repository;
import nl.aalten.boodschappenlijst.storage.postgres.boodschappenlijst.BoodschappenlijstRepository;
import nl.aalten.boodschappenlijst.storage.postgres.product.ProductRepository;
import nl.aalten.boodschappenlijst.storage.postgres.productgroup.ProductGroupRepository;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Component;

@Component
public class PostgresRepository implements Repository {
    protected final Log logger = LogFactory.getLog(getClass());

    private final ProductGroupRepository productGroupRepository;
    private final ProductRepository productRepository;
    private final BoodschappenlijstRepository boodschappenlijstRepository;

    public PostgresRepository(ProductGroupRepository productGroupRepository, ProductRepository productRepository, BoodschappenlijstRepository boodschappenlijstRepository) {
        this.productGroupRepository = productGroupRepository;
        this.productRepository = productRepository;
        this.boodschappenlijstRepository = boodschappenlijstRepository;
    }

    @Override
    public List<Product> getProducts() {
        return productRepository.getProducts();
    }

    @Override
    public Optional<Product> getProduct(Long productId) {
        return productRepository.getProduct(productId);
    }

    @Override
    public List<ProductGroep> getProductGroups() {
        try {
            List<ProductGroep> productGroups = productGroupRepository.getProductGroups();
            return productGroups;
        } catch (Exception exc) {
            return Collections.emptyList();
        }
    }

    @Override
    public void updateItem(BoodschappenlijstItem boodschappenlijstItem) {
        boodschappenlijstRepository.updateItem(boodschappenlijstItem);
    }

    @Override
    public void deleteItem(Long itemId) {
        boodschappenlijstRepository.deleteItem(itemId);
    }

    @Override
    public List<BoodschappenlijstItem> getBoodschappenlijstItems() {
        List<BoodschappenlijstItem> items = boodschappenlijstRepository.getBoodschappenlijstItems();
        items.forEach(this::findAndSetProduct);
        return items;
    }

    private void findAndSetProduct(BoodschappenlijstItem item) {
        Product product = productRepository.getProduct(item.getId()).orElseThrow(() -> new IllegalStateException(format("Product with id %d not found", item.getId())));
        item.setProduct(product);
    }

    @Override
    public void clearList() {
        boodschappenlijstRepository.clearList();
    }

}
