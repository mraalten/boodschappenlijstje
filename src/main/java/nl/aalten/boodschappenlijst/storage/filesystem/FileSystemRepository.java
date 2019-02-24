package nl.aalten.boodschappenlijst.storage.filesystem;

import static java.lang.String.format;

import java.util.List;
import java.util.stream.Collectors;

import javax.inject.Inject;

import nl.aalten.boodschappenlijst.domain.BoodschappenlijstItem;
import nl.aalten.boodschappenlijst.domain.Product;
import nl.aalten.boodschappenlijst.domain.ProductGroep;
import nl.aalten.boodschappenlijst.storage.Repository;
import nl.aalten.boodschappenlijst.storage.filesystem.mapper.ProductGroupMapper;
import nl.aalten.boodschappenlijst.storage.filesystem.mapper.ProductMapper;

import org.springframework.stereotype.Component;

@Component
public class FileSystemRepository implements Repository {

    private static final String FILE_NAME_PRODUCTEN = "producten.txt";
    private static final String FILE_NAME_PRODUCT_GROUPS = "product-groepen.txt";
    private static final String FILE_NAME_PRODUCT_BOODSCHAPPENLIJST = "boodschappenlijst.txt";

    private final FileUtil fileUtil;
    private final ProductMapper productMapper;
    private final ProductGroupMapper productGroupMapper;

    @Inject
    public FileSystemRepository(
            FileUtil fileUtil,
            ProductMapper productMapper,
            ProductGroupMapper productGroupMapper
    ) {
        this.fileUtil = fileUtil;
        this.productMapper = productMapper;
        this.productGroupMapper = productGroupMapper;
    }

    @Override
    public List<Product> getProducts() {
        List<String> productLines = fileUtil.readFile(FILE_NAME_PRODUCTEN);
        return fileUtil.splitAndConvert(productLines, productMapper::mapLine);
    }

    public Product getProduct(Long productId) {
        return getProducts().stream()
            .filter(product -> product.getId() == productId)
            .findFirst()
            .orElseThrow(() -> new IllegalStateException(format("Product not found for #id %d", productId)));
    }

    @Override
    public List<ProductGroep> getProductGroups() {
        List<String> productGroupLines = fileUtil.readFile(FILE_NAME_PRODUCT_GROUPS);
        return fileUtil.splitAndConvert(productGroupLines, productGroupMapper::mapLine);
    }

    @Override
    public void updateItem(BoodschappenlijstItem boodschappenlijstItem) {
        fileUtil.updateBoodschappenlijstitem(boodschappenlijstItem);
    }

    @Override
    public void deleteItem(Long itemId) {
        fileUtil.deleteBoodschappenlijstItem(itemId);
    }

    @Override
    public List<BoodschappenlijstItem> getBoodschappenlijstItems() {
        List<String> items = fileUtil.readFile(FILE_NAME_PRODUCT_BOODSCHAPPENLIJST);
        return items.stream()
            .map(line -> fileUtil.split(line))
            .map(this::toBoodschappenlijstItem)
            .collect(Collectors.toList());
    }

    private BoodschappenlijstItem toBoodschappenlijstItem(String[] columns) {
        Long itemId = Long.valueOf(columns[0]);
        Long productId = Long.valueOf(columns[1]);
        int aantal = Integer.valueOf(columns[2]);
        Product product = getProduct(productId);

        return new BoodschappenlijstItem(itemId, product, aantal);
    }

}
