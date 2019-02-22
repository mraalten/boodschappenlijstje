package nl.aalten.boodschappenlijst.util;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

import nl.aalten.boodschappenlijst.domain.BoodschappenlijstItem;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class FileUtil {
    private static final String SEPARATOR_CHAR = ";";
    private static final String FILE_NAME_BOODSCHAPPENLIJST = "boodschappenlijst.txt";

    private final String propertiesPath;

    public FileUtil(@Value("${propertiesPath}") String propertiesPath) {
        this.propertiesPath = propertiesPath;
    }

    public List<String> readFile(String fileName) {
        try {
            Path path = toFullPath(fileName);
            return new ArrayList<>(Files.readAllLines(path, StandardCharsets.UTF_8));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public static <T> List<T> splitMapper(List<String> list, Function<String[], T> mapper) {
        return list.stream().map(line -> line.split(SEPARATOR_CHAR)).map(mapper).collect(Collectors.toList());
    }

    public void updateBoodschappenlijst(BoodschappenlijstItem item) {
        String newLine = toUpdatedLine(item);

        List<String> currentList = readFile(FILE_NAME_BOODSCHAPPENLIJST);
        int indexForItem = findIndexForItem(item, currentList);
        if (indexForItem >=0) {
            currentList.set(indexForItem, newLine);
        } else {
            currentList.add(newLine);
        }
        try {
            Files.write(toFullPath(FILE_NAME_BOODSCHAPPENLIJST), currentList, StandardCharsets.UTF_8);
        } catch (IOException e) {
            throw new RuntimeException(e);
        };
    }

    private int findIndexForItem(BoodschappenlijstItem item, List<String> currentList) {
        for (int index = 0; index < currentList.size(); index++) {
            if (currentList.get(index).startsWith(item.getId() + SEPARATOR_CHAR)) {
                return index;
            }
        }
        return -1;
    }

    private String toUpdatedLine(BoodschappenlijstItem item) {
        StringBuilder sb = new StringBuilder();
        sb.append(item.getId());
        sb.append(SEPARATOR_CHAR);
        sb.append(item.getProduct().getId());
        sb.append(SEPARATOR_CHAR);
        sb.append(item.getAantal());
        sb.append(SEPARATOR_CHAR);
        return sb.toString();
    }

    private Path toFullPath(String fileName) {
        return Paths.get(propertiesPath + "/" + fileName);
    }

}
