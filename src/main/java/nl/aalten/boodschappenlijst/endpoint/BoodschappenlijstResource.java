package nl.aalten.boodschappenlijst.endpoint;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

import java.io.File;
import java.io.FileInputStream;
import java.util.Arrays;
import java.util.List;

import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import nl.aalten.boodschappenlijst.domain.BoodschappenlijstItem;
import nl.aalten.boodschappenlijst.domain.Eenheid;
import nl.aalten.boodschappenlijst.domain.Product;
import nl.aalten.boodschappenlijst.domain.ProductGroep;
import nl.aalten.boodschappenlijst.output.PdfService;
import nl.aalten.boodschappenlijst.storage.Repository;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class BoodschappenlijstResource {

    private final Repository repository;
    private final PdfService pdfService;
    private final String propertiesPath;

    public BoodschappenlijstResource(
            Repository repository,
            PdfService pdfService,
            @Value("${propertiesPath}") String propertiesPath
    ) {
        this.repository = repository;
        this.pdfService = pdfService;
        this.propertiesPath = propertiesPath;
    }

    @RequestMapping(value = "/products", method = GET)
    public List<Product> getProducts() {
        return repository.getProducts();
    }

    @RequestMapping(value = "/productgroups", method = GET)
    public List<ProductGroep> getProductGroups() {
        return repository.getProductGroups();
    }

    @RequestMapping(value = "/eenheden", method = GET)
    public List<Eenheid> getEenheden() {
        return Arrays.asList(Eenheid.values());
    }

    @RequestMapping(value = "/updateItem", method = POST)
    public void updateBoodschappenlijstItem(@RequestBody BoodschappenlijstItem boodschappenLijstItem) {
        repository.updateItem(boodschappenLijstItem);
    }

    @RequestMapping(value = "/deleteItem", method = POST)
    public void deleteBoodschappenlijstItem(@RequestBody Long itemId) {
        repository.deleteItem(itemId);
    }

    @RequestMapping(value = "/getItems", method = GET)
    public List<BoodschappenlijstItem> getBoodschappenlijstItems() {
        return repository.getBoodschappenlijstItems();
    }

    @RequestMapping(value = "/clearList", method = POST)
    public void clearList() {
        repository.clearList();
    }

    @RequestMapping(value = "/createPdf", method = GET)
    @Produces("application/pdf")
    public Response createPdf() {
        List<BoodschappenlijstItem> items = repository.getBoodschappenlijstItems();
        try {
            pdfService.createPdf();
            File file = new File(propertiesPath + "boodschappen.pdf");
            FileInputStream fis = new FileInputStream(file);
            return Response.ok(file , MediaType.APPLICATION_OCTET_STREAM)
                    .header("Content-Disposition",
                            "attachment; filename=boodschappen.pdf")
                    .build();
//                    .type("application/pdf")
//                    .header("Content-Disposition", "filename=boodschappen.pdf")
//                    .build();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
}
