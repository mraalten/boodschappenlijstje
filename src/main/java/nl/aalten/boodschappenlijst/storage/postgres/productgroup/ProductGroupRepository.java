package nl.aalten.boodschappenlijst.storage.postgres.productgroup;

import java.util.List;

import nl.aalten.boodschappenlijst.domain.ProductGroep;

import org.springframework.jdbc.core.namedparam.NamedParameterJdbcOperations;
import org.springframework.stereotype.Repository;

@Repository
public class ProductGroupRepository {

    private static final String ALL_FIELDS = "select id, naam, image_naam, sort_order";

    private final ProductGroupMapper productGroupMapper;
    private final NamedParameterJdbcOperations jdbcTemplate;

    public ProductGroupRepository(NamedParameterJdbcOperations jdbcTemplate, ProductGroupMapper productGroupMapper) {
        this.productGroupMapper = productGroupMapper;
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<ProductGroep> getProductGroups() {
        return jdbcTemplate.query(ALL_FIELDS + " from boodschappenlijstje.productgroepen", productGroupMapper);
    }


}
