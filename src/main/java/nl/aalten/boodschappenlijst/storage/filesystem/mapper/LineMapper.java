package nl.aalten.boodschappenlijst.storage.filesystem.mapper;

import nl.aalten.boodschappenlijst.domain.Eenheid;

public abstract class LineMapper<T> {

    abstract T mapLine(String[] columns);

    String asString(String[] columns, int columnId) {
        return columns[columnId];
    }

    Long asLong(String[] columns, int columnId) {
        return Long.valueOf(columns[columnId]);
    }

    Eenheid asEenheid(String[] columns, int columnId) {
        return Eenheid.valueOf(columns[columnId]);
    }

    int asInteger(String[] columns, int columnId) {
        return Integer.valueOf(columns[columnId]);
    }

}
