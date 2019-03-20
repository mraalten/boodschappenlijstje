package nl.aalten.boodschappenlijst;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

public class ProductenToSql {

    public static void main(String[] args) throws IOException {

        File file = new File("/Users/Aalten/Documents/Workspace/boodschappenlijstje/src/main/resources/producten.txt");
        Files.readAllLines(file.toPath()).forEach(line -> {
            String[] columns = line.split(";");
            System.out.println("insert into boodschappenlijstje.producten(id, naam, imagenaam, eenheid, productgroepid) values(" +
                    columns[0] + ", '" +
                    columns[1] + "', '" +
                    columns[2] + "', '" +
                    columns[3] + "', " +
                    columns[4] + ");");
        });
    }
}
