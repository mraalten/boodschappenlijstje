package nl.aalten.boodschappenlijst;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

public class FileReader {

    public List<String> read(String[] args) {
        InputStream inputStream = this.getClass().getResourceAsStream("/producten.txt");
        List<String> lines = new ArrayList();
        try {
            try (BufferedReader br = new BufferedReader(new InputStreamReader(inputStream))) {
                String line;
                while ((line = br.readLine()) != null) {
                    lines.add(line);
                }
            }
            return lines;
        } catch (IOException e) {
            throw new RuntimeException(e);
        }


    }

}
