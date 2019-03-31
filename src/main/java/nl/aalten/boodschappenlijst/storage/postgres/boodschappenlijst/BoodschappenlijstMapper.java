package nl.aalten.boodschappenlijst.storage.postgres.boodschappenlijst;

import java.sql.ResultSet;
import java.sql.SQLException;

import nl.aalten.boodschappenlijst.domain.BoodschappenlijstItem;

import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

@Component
public class BoodschappenlijstMapper implements RowMapper<BoodschappenlijstItem> {

    @Override
    public BoodschappenlijstItem mapRow(ResultSet rs, int rowNum) throws SQLException {
        long id = rs.getLong("id");
        int aantal = rs.getInt("aantal");
        BoodschappenlijstItem boodschappenlijstItem = new BoodschappenlijstItem();
        boodschappenlijstItem.setId(id);
        boodschappenlijstItem.setAantal(aantal);
        return boodschappenlijstItem;
    }
}
