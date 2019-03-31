package nl.aalten.boodschappenlijst.storage.postgres.boodschappenlijst;

import java.util.List;

import nl.aalten.boodschappenlijst.domain.BoodschappenlijstItem;

import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcOperations;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;

@Repository
public class BoodschappenlijstRepository {

    private static final String INSERT_NEW_ITEM = "insert into boodschappenlijstje.boodschappenlijst (id, productid, aantal) values(:id, :productid, 1)";
    private static final String UPDATE_ITEM_WITH_NEW_AANTAL = "update boodschappenlijstje.boodschappenlijst set aantal = :aantal where id = :id";
    private static final String GET_ALL_ITEMS = "select id, productid, aantal from boodschappenlijstje.boodschappenlijst";
    private static final String DELETE_ITEM = "delete from boodschappenlijstje.boodschappenlijst where id = :id";
    private static final String DELETE_ALL_ITEMS = "delete from boodschappenlijstje.boodschappenlijst";
    private static final String ITEM_PRESENT = "select count(*) from boodschappenlijstje.boodschappenlijst where id = :id";

    private final BoodschappenlijstMapper boodschappenlijstMapper;
    private final NamedParameterJdbcOperations jdbcTemplate;

    public BoodschappenlijstRepository(NamedParameterJdbcOperations jdbcTemplate, BoodschappenlijstMapper boodschappenlijstMapper) {
        this.boodschappenlijstMapper = boodschappenlijstMapper;
        this.jdbcTemplate = jdbcTemplate;
    }

    public void updateItem(BoodschappenlijstItem boodschappenlijstItem) {
        if (itemOnList(boodschappenlijstItem)) {
            updateItemOnList(boodschappenlijstItem);
            return;
        }
        insertItem(boodschappenlijstItem);
    }

    private boolean itemOnList(BoodschappenlijstItem boodschappenlijstItem) {
        SqlParameterSource params = new MapSqlParameterSource()
                .addValue("id", boodschappenlijstItem.getId());
        return jdbcTemplate.queryForObject(ITEM_PRESENT, params, Integer.class) > 0;
    }

    public void insertItem(BoodschappenlijstItem boodschappenlijstItem) {
        SqlParameterSource params = new MapSqlParameterSource()
                .addValue("id", boodschappenlijstItem.getId())
                .addValue("productid", boodschappenlijstItem.getProduct().getId());
        jdbcTemplate.update(INSERT_NEW_ITEM, params);
    }

    private void updateItemOnList(BoodschappenlijstItem boodschappenlijstItem) {
        SqlParameterSource params = new MapSqlParameterSource()
                .addValue("id", boodschappenlijstItem.getId())
                .addValue("aantal", boodschappenlijstItem.getAantal());
        jdbcTemplate.update(UPDATE_ITEM_WITH_NEW_AANTAL, params);
    }

    public List<BoodschappenlijstItem> getBoodschappenlijstItems() {
        return jdbcTemplate.query(GET_ALL_ITEMS, boodschappenlijstMapper);
    }

    public void deleteItem(Long itemId) {
        SqlParameterSource params = new MapSqlParameterSource()
                .addValue("id", itemId);
        jdbcTemplate.update(DELETE_ITEM, params);
    }

    public void clearList() {
        jdbcTemplate.update(DELETE_ALL_ITEMS, new MapSqlParameterSource());
    }

}
