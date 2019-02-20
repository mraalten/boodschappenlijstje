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

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class FileUtil {
    private static final String SEPARATOR_CHAR = ";";

    private final String propertiesPath;

    public FileUtil(
            @Value("${propertiesPath}") String propertiesPath
    ) {
        this.propertiesPath = propertiesPath;
    }

    public List<String> readFile(String fileName) {
        try {
            Path path = Paths.get(propertiesPath + "/" + fileName);
            return new ArrayList<>(Files.readAllLines(path, StandardCharsets.UTF_8));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public static <T> List<T> splitMapper(List<String> list, Function<String[], T> mapper) {
        return list.stream()
                .map(line -> line.split(SEPARATOR_CHAR))
                .map(mapper)
                .collect(Collectors.toList());
    }
}

//    List<String> fileContent = new ArrayList<>(Files.readAllLines(FILE_PATH, StandardCharsets.UTF_8));
//
//for (int i = 0; i < fileContent.size(); i++) {
//        if (fileContent.get(i).equals("old line")) {
//        fileContent.set(i, "new line");
//        break;
//        }
//        }
//
//        Files.write(FILE_PATH, fileContent, StandardCharsets.UTF_8);
