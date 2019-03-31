package nl.aalten.boodschappenlijst.storage.filesystem.mapper;

import nl.aalten.boodschappenlijst.domain.Product;

import org.springframework.stereotype.Component;

@Component
public class FileSystemProductMapper extends LineMapper<Product> {
    private static final int ID         = 0;
    private static final int NAME       = 1;
    private static final int IMAGE_NAME = 2;
    private static final int EENHEID    = 3;
    private static final int GROUP_ID   = 4;

    @Override
    public Product mapLine(String[] columns) {
        return new Product(
                asLong(columns, ID),
                asString(columns, NAME),
                asString(columns, IMAGE_NAME),
                asEenheid(columns, EENHEID),
                asLong(columns, GROUP_ID)
        );
    }

}
