package nl.aalten.boodschappenlijstje.produkt;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

import java.util.Collections;
import java.util.List;

import nl.aalten.boodschappenlijstje.domain.Produkt;
import nl.aalten.boodschappenlijstje.domain.ProduktGroep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProduktenRestController {

    private final Repository repository;

    @Autowired
    public ProduktenRestController(Repository repository) {
        this.repository = repository;
    }

    @RequestMapping(value = "/product-groups", method = RequestMethod.GET)
    public List<ProduktGroep> getProduktGroepen() {
        return repository.getProduktGroepen();
    }

    @RequestMapping(value = "/products", method = GET)
    public List<Produkt> getProducts() {
        return Collections.singletonList(new Produkt(1L, "Sla", "EM-Te", "sla.jpg"));
    }
}
