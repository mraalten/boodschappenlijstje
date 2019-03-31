package nl.aalten.boodschappenlijst.storage.postgres.productgroup;

import java.sql.ResultSet;
import java.sql.SQLException;

import nl.aalten.boodschappenlijst.domain.ProductGroep;

import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

@Component
public class ProductGroupMapper implements RowMapper<ProductGroep> {

    @Override
    public ProductGroep mapRow(ResultSet resultSet, int rowNumber) throws SQLException {
        Long id = resultSet.getLong("id");
        String productGroepNaam = resultSet.getString("naam");
        String imageNaam = resultSet.getString("image_naam");
        int sortOrder = resultSet.getInt("sort_order");
        return new ProductGroep(id, productGroepNaam, imageNaam, sortOrder);
    }

}
