package nl.aalten.boodschappenlijst.product;

import java.util.List;

import javax.inject.Inject;

import nl.aalten.boodschappenlijst.domain.BoodschappenlijstItem;
import nl.aalten.boodschappenlijst.domain.Eenheid;
import nl.aalten.boodschappenlijst.domain.Product;
import nl.aalten.boodschappenlijst.domain.ProductGroep;
import nl.aalten.boodschappenlijst.util.FileUtil;

import org.springframework.stereotype.Component;

@Component
public class FileSystemRepository implements Repository {

    private static final String FILE_NAME_PRODUCTEN = "producten.txt";
    private static final String FILE_NAME_PRODUCT_GROUPS = "product-groepen.txt";

    private final FileUtil fileUtil;

    @Inject
    public FileSystemRepository(FileUtil fileUtil) {
        this.fileUtil = fileUtil;
    }

    public List<Product> getProducts() {
        List<String> fileContent = fileUtil.readFile(FILE_NAME_PRODUCTEN);
        return toProducts(fileContent);
    }

    private Product toProduct(String[] columns) {
        String id = columns[0];
        String naam = columns[1];
        String imageName = columns[2];
        String eenheid = columns[3];
        String groupId = columns[4];
        return new Product(
                Long.valueOf(id),
                naam,
                imageName,
                Eenheid.valueOf(eenheid),
                Long.valueOf(groupId)
        );
    }

    private List<Product> toProducts(List<String> productLines) {
        return FileUtil.splitMapper(productLines, this::toProduct);
    }

    @Override
    public List<ProductGroep> getProductGroups() {
        List<String> productGroupLines = fileUtil.readFile(FILE_NAME_PRODUCT_GROUPS);
        return toProductGroups(productGroupLines);
    }

    private List<ProductGroep> toProductGroups(List<String> productGroupLines) {
        return FileUtil.splitMapper(productGroupLines, this::toProductGroup);
    }

    private ProductGroep toProductGroup(String[] columns) {
        String id = columns[0];
        String naam = columns[1];
        String imageName = columns[2];
        String sortOrder = columns[3];
        return new ProductGroep(
                Long.valueOf(id),
                naam,
                imageName,
                Integer.valueOf(sortOrder)
        );
    }

    @Override
    public void updateItem(BoodschappenlijstItem boodschappenlijstItem) {
        fileUtil.updateBoodschappenlijst(boodschappenlijstItem);
        System.out.println(boodschappenlijstItem);
    }


}
