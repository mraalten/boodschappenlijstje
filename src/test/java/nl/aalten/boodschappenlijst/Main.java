package nl.aalten.boodschappenlijst;

import java.util.List;

public class Main {

    public static void main(String[] args) {
        FileReader reader = new FileReader();
        List<String> lines = reader.read(null);
        for (String line : lines) {
            String[] parts = line.split(";");
            String id = parts[0].trim();
            String naam = parts[1].trim();
            String merk = parts[2].trim();
            String image = parts[3].trim();
            String eenheid = parts[4].trim();
            String productGroupId = parts[5].trim();
            System.out.println("new Product(" + id + ", '" + naam + "', '" + image + "', '" + eenheid + "', " + productGroupId +"),");
//            new Product(1, 'Sla', 'sla.jpg', 'krop')

        }
        System.out.println(lines);
    }
}
