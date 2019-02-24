package nl.aalten.boodschappenlijst.storage.filesystem;

import static java.nio.file.Files.readAllLines;
import static java.nio.file.Files.write;
import static java.util.stream.Collectors.toList;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Function;

import nl.aalten.boodschappenlijst.domain.BoodschappenlijstItem;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class FileUtil {
    private static final String SEPARATOR_CHAR = ";";
    public static final String FILE_NAME_BOODSCHAPPENLIJST = "boodschappenlijst.txt";

    private final String propertiesPath;

    public FileUtil(@Value("${propertiesPath}") String propertiesPath) {
        this.propertiesPath = propertiesPath;
    }

    public List<String> readFile(String fileName) {
        Path path = toFullPath(fileName);
        try {
            return new ArrayList<>(readAllLines(path, StandardCharsets.UTF_8));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public void updateBoodschappenlijstitem(BoodschappenlijstItem item) {
        String newLine = toUpdatedLine(item);

        List<String> currentList = readFile(FILE_NAME_BOODSCHAPPENLIJST);
        int indexForItem = findIndexForItem(item, currentList);
        if (itemOnList(indexForItem)) {
            currentList.set(indexForItem, newLine);
        } else {
            currentList.add(newLine);
        }
        writeToFile(FILE_NAME_BOODSCHAPPENLIJST, currentList);
    }

    private boolean itemOnList(int indexForItem) {
        return indexForItem >= 0;
    }

    public void writeToFile(String fileName, List<String> list) {
        withExceptionHandling(() ->
            write(toFullPath(fileName), list, StandardCharsets.UTF_8)
        );
    }

    private void withExceptionHandling(IOSupplierWithExceptionHandling supplier) {
        try {
            supplier.get();
        } catch (IOException ioExc) {
            throw new RuntimeException(ioExc);
        }
    }

    private int findIndexForItem(BoodschappenlijstItem item, List<String> currentList) {
        for (int index = 0; index < currentList.size(); index++) {
            if (currentList.get(index).contains(SEPARATOR_CHAR + item.getProduct().getId() + SEPARATOR_CHAR)) {
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

    public <T> List<T> splitAndConvert(List<String> list, Function<String[], T> mapper) {
        return list.stream()
                .map(this::split)
                .map(mapper)
                .collect(toList());
    }

    public String[] split(String line) {
        return line.split(SEPARATOR_CHAR);
    }

    public void deleteBoodschappenlijstItem(Long itemId) {
        List<String> boodschappenlijstItems = readFile(FILE_NAME_BOODSCHAPPENLIJST);
        List<String> updatedList = new ArrayList<>();
        for (String line : boodschappenlijstItems) {
            if (!line.startsWith(itemId + SEPARATOR_CHAR)) {
                updatedList.add(line);
            }
        }
        writeToFile(FILE_NAME_BOODSCHAPPENLIJST, updatedList);
    }
}
