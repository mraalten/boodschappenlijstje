package nl.aalten.boodschappenlijst.storage.postgres.product;

import java.sql.ResultSet;
import java.sql.SQLException;

import nl.aalten.boodschappenlijst.domain.Eenheid;
import nl.aalten.boodschappenlijst.domain.Product;

import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

@Component
public class ProductMapper implements RowMapper<Product> {

    @Override
    public Product mapRow(ResultSet resultSet, int rowNumber) throws SQLException {
        Long id = resultSet.getLong("id");
        String productNaam = resultSet.getString("naam");
        String imageNaam = resultSet.getString("image_naam");
        Eenheid eenheid = Eenheid.valueOf(resultSet.getString("eenheid"));
        Long productGroupId = resultSet.getLong("product_groep_id");
        return new Product(id, productNaam, "",  imageNaam, eenheid, productGroupId);
    }

}
