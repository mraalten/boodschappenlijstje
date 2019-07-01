package nl.aalten.boodschappenlijst.storage.filesystem;

import static java.lang.String.format;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.inject.Inject;

import nl.aalten.boodschappenlijst.domain.BoodschappenlijstItem;
import nl.aalten.boodschappenlijst.domain.Product;
import nl.aalten.boodschappenlijst.domain.ProductGroep;
import nl.aalten.boodschappenlijst.storage.Repository;
import nl.aalten.boodschappenlijst.storage.filesystem.mapper.FileSystemProductGroupMapper;
import nl.aalten.boodschappenlijst.storage.filesystem.mapper.FileSystemProductMapper;

import org.springframework.stereotype.Component;

@Component
public class FileSystemRepository implements Repository {

    private static final String FILE_NAME_PRODUCTEN = "producten.txt";
    private static final String FILE_NAME_PRODUCT_GROUPS = "product-groepen.txt";
    private static final String FILE_NAME_PRODUCT_BOODSCHAPPENLIJST = "boodschappenlijst.txt";

    private final FileUtil fileUtil;
    private final FileSystemProductMapper fileSystemProductMapper;
    private final FileSystemProductGroupMapper fileSystemProductGroupMapper;

    @Inject
    public FileSystemRepository(
            FileUtil fileUtil,
            FileSystemProductMapper fileSystemProductMapper,
            FileSystemProductGroupMapper fileSystemProductGroupMapper
    ) {
        this.fileUtil = fileUtil;
        this.fileSystemProductMapper = fileSystemProductMapper;
        this.fileSystemProductGroupMapper = fileSystemProductGroupMapper;
    }

    @Override
    public List<Product> getProducts() {
        List<String> productLines = fileUtil.readFile(FILE_NAME_PRODUCTEN);
        return fileUtil.splitAndConvert(productLines, fileSystemProductMapper::mapLine);
    }

    public Optional<Product> getProduct(Long productId) {
        return getProducts().stream()
            .filter(product -> product.getId().equals(productId))
            .findFirst();
    }

    @Override
    public List<ProductGroep> getProductGroups() {
        List<String> productGroupLines = fileUtil.readFile(FILE_NAME_PRODUCT_GROUPS);
        return fileUtil.splitAndConvert(productGroupLines, fileSystemProductGroupMapper::mapLine);
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

    @Override
    public void clearList() {
        fileUtil.writeToFile(FILE_NAME_PRODUCT_BOODSCHAPPENLIJST, new ArrayList<>());
    }

    @Override
    public void saveProduct(Product product) {
        // not implemented
    }

    @Override
    public void deleteProduct(Long itemId) {
        // not implemented
    }

    private BoodschappenlijstItem toBoodschappenlijstItem(String[] columns) {
        Long itemId = Long.valueOf(columns[0]);
        Long productId = Long.valueOf(columns[1]);
        int aantal = Integer.valueOf(columns[2]);
        Product product = getProduct(productId).orElseThrow(() -> new IllegalStateException(format("Product with id %d not found.", productId)));

        return new BoodschappenlijstItem(itemId, product, aantal);
    }

}
