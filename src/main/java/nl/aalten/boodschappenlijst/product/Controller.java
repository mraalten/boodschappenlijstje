package nl.aalten.boodschappenlijst.product;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

import java.util.Arrays;
import java.util.List;

import javax.inject.Inject;

import nl.aalten.boodschappenlijst.domain.BoodschappenlijstItem;
import nl.aalten.boodschappenlijst.domain.Eenheid;
import nl.aalten.boodschappenlijst.domain.Product;
import nl.aalten.boodschappenlijst.domain.ProductGroep;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class Controller {

    @Inject
    private Repository repository;

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

}
