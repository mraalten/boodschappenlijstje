package nl.aalten.boodschappenlijst.storage.filesystem;

import java.io.IOException;

@FunctionalInterface
public interface IOSupplierWithExceptionHandling<T> {

    T get() throws IOException;

}
