package nl.aalten.boodschappenlijst.storage.filesystem.mapper;

import nl.aalten.boodschappenlijst.domain.ProductGroep;

import org.springframework.stereotype.Component;

@Component
public class FileSystemProductGroupMapper extends LineMapper<ProductGroep> {
    private static final int ID         = 0;
    private static final int NAME       = 1;
    private static final int IMAGE_NAME = 2;
    private static final int SORT_ORDER = 3;

    @Override
    public ProductGroep mapLine(String[] columns) {
        return new ProductGroep(
                asLong(columns, ID),
                asString(columns, NAME),
                asString(columns, IMAGE_NAME),
                asInteger(columns, SORT_ORDER)
        );
    }

}
