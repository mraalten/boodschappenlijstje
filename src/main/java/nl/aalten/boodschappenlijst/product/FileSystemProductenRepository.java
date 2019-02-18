package nl.aalten.boodschappenlijst.product;

import java.util.List;
import java.util.stream.Collectors;

import javax.inject.Inject;

import nl.aalten.boodschappenlijst.domain.Eenheid;
import nl.aalten.boodschappenlijst.util.FileUtil;

import org.springframework.stereotype.Component;

@Component
public class FileSystemProductenRepository {

    private static final String SEPARATOR_CHAR = ";";
    private static final String FILE_NAME_PRODUCTEN = "producten.txt";

    private final FileUtil fileUtil;

    @Inject
    public FileSystemProductenRepository(FileUtil fileUtil) {
        this.fileUtil = fileUtil;
    }

    public List<Product> getProducts() {
        List<String> fileContent = fileUtil.readFile(FILE_NAME_PRODUCTEN);
        return fromCsv(fileContent);
    }

    private List<Product> fromCsv(List<String> productLines) {
        return productLines.stream().map(line -> line.split(SEPARATOR_CHAR)).map(this::toProduct).collect(Collectors.toList());
    }

    private Product toProduct(String[] columns) {
        String id = columns[0];
        String naam = columns[1];
        String imageName = columns[2];
        String eenheid = columns[3];
        String groupId = columns[4];
        return new Product(Long.valueOf(id), naam, imageName, Eenheid.valueOf(eenheid), Long.valueOf(groupId));
    }

}
