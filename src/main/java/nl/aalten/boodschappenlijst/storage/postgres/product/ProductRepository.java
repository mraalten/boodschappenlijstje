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
    private static final String INSERT_PRODUCT_SQL = "insert into boodschappenlijstje.producten (id, naam, image_naam, eenheid, product_groep_id) values(:id, :naam, :image_naam, :eenheid, :product_groep_id)";
    private static final String UPDATE_PRODUCT_SQL = "update boodschappenlijstje.producten set naam = :naam, image_naam = :image_naam, eenheid = :eenheid where id = :id";
    private static final String DELETE_PRODUCT_SQL = "delete from boodschappenlijstje.producten where id = :id";

    private static final String GET_PRODUCT_FOR_ID = ALL_FIELDS + " where id = :productId order by id";
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
        return jdbcTemplate.query(ALL_FIELDS + " order by id", productMapper);
    }

    public void saveProduct(Product product) {
        SqlParameterSource params = new MapSqlParameterSource()
                .addValue("id", product.getId())
                .addValue("naam", product.getNaam())
                .addValue("image_naam", product.getImageNaam())
                .addValue("eenheid", product.getEenheid().toString())
                .addValue("product_groep_id", product.getProductGroepId());
        Optional<Product> optionalProduct = getProduct(product.getId());
        if (optionalProduct.isPresent()) {
            jdbcTemplate.update(UPDATE_PRODUCT_SQL, params);
        } else {
            jdbcTemplate.update(INSERT_PRODUCT_SQL, params);
        }
    }

    public void deleteProduct(Long productId) {
        SqlParameterSource params = new MapSqlParameterSource()
                .addValue("id", productId);
        jdbcTemplate.update(DELETE_PRODUCT_SQL, params);
    }
}
