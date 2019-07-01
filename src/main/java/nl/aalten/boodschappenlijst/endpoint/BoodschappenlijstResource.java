package nl.aalten.boodschappenlijst.endpoint;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

import java.io.File;
import java.nio.file.Files;
import java.util.Arrays;
import java.util.List;

import javax.ws.rs.Produces;

import nl.aalten.boodschappenlijst.domain.BoodschappenlijstItem;
import nl.aalten.boodschappenlijst.domain.Eenheid;
import nl.aalten.boodschappenlijst.domain.Product;
import nl.aalten.boodschappenlijst.domain.ProductGroep;
import nl.aalten.boodschappenlijst.output.PdfService;
import nl.aalten.boodschappenlijst.storage.postgres.PostgresRepository;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class BoodschappenlijstResource {

//    private final FileSystemRepository fileSystemRepository;
    private final PostgresRepository postgresRepository;
    private final PdfService pdfService;
    private final String propertiesPath;

    public BoodschappenlijstResource(
            PostgresRepository postgresRepository,
            PdfService pdfService,
            @Value("${propertiesPath}") String propertiesPath
    ) {
        this.postgresRepository = postgresRepository;
        this.pdfService = pdfService;
        this.propertiesPath = propertiesPath;
    }

    @RequestMapping(value = "/products", method = GET)
    public List<Product> getProducts() {
        return postgresRepository.getProducts();
    }

    @RequestMapping(value = "/productgroups", method = GET)
    public List<ProductGroep> getProductGroups() {
        return postgresRepository.getProductGroups();
    }

    @RequestMapping(value = "/eenheden", method = GET)
    public List<Eenheid> getEenheden() {
        return Arrays.asList(Eenheid.values());
    }

    @RequestMapping(value = "/updateItem", method = POST)
    public void updateBoodschappenlijstItem(@RequestBody BoodschappenlijstItem boodschappenLijstItem) {
        postgresRepository.updateItem(boodschappenLijstItem);
    }

    @RequestMapping(value = "/saveProduct", method = POST)
    public void addProduct(@RequestBody Product product) {
        postgresRepository.saveProduct(product);
    }

    @RequestMapping(value = "/deleteProduct", method = POST)
    public void deleteProduct(@RequestBody Long itemId) {
        postgresRepository.deleteProduct(itemId);
    }

    @RequestMapping(value = "/deleteItem", method = POST)
    public void deleteBoodschappenlijstItem(@RequestBody Long itemId) {
        postgresRepository.deleteItem(itemId);
    }

    @RequestMapping(value = "/getItems", method = GET)
    public List<BoodschappenlijstItem> getBoodschappenlijstItems() {
        return postgresRepository.getBoodschappenlijstItems();
    }

    @RequestMapping(value = "/clearList", method = POST)
    public void clearList() {
        postgresRepository.clearList();
    }

    @RequestMapping(value = "/createPdf", method = GET)
    @Produces("application/pdf")
    public ResponseEntity<byte[]>  createPdf() {
        try {
            pdfService.createPdf();
            File file = new File(propertiesPath + "boodschappen.pdf");
            byte[] pdfContents = Files.readAllBytes(file.toPath());
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.parseMediaType("application/pdf"));
            String filename = "Boodschappenlijstje.pdf";
            headers.setContentDispositionFormData(filename, filename);
            headers.setCacheControl("must-revalidate, post-check=0, pre-check=0");
            ResponseEntity<byte[]> response = new ResponseEntity<>(
                    pdfContents, headers, HttpStatus.OK);
            return response;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
}
