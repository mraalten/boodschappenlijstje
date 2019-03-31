package nl.aalten.boodschappenlijst.storage.postgres.product;

import static java.util.Optional.ofNullable;
import static org.springframework.dao.support.DataAccessUtils.singleResult;

import java.util.List;
import java.util.Optional;

import nl.aalten.boodschappenlijst.domain.Product;

import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcOperations;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;

@Repository
public class ProductRepository {
    private static final String ALL_FIELDS = "select id, naam, image_naam, eenheid, product_groep_id from boodschappenlijstje.producten";

    private static final String GET_PRODUCT_FOR_ID = ALL_FIELDS + " where id = :productId";
    private final ProductMapper productMapper;
    private final NamedParameterJdbcOperations jdbcTemplate;

    public ProductRepository(NamedParameterJdbcOperations jdbcTemplate, ProductMapper productMapper) {
        this.productMapper = productMapper;
        this.jdbcTemplate = jdbcTemplate;
    }

    public Optional<Product> getProduct(Long productId) {
        SqlParameterSource params = new MapSqlParameterSource().addValue("productId", productId);
        return ofNullable(singleResult(jdbcTemplate.query(GET_PRODUCT_FOR_ID, params, productMapper)));
    }

    public List<Product> getProducts() {
        return jdbcTemplate.query(ALL_FIELDS, productMapper);
    }

}
