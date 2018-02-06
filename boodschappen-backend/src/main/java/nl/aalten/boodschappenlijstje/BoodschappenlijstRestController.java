package nl.aalten.boodschappenlijstje;

import java.util.Collections;
import java.util.List;

import nl.aalten.boodschappenlijstje.domain.Produkt;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BoodschappenlijstRestController {

    @RequestMapping("/products")
    public List<Produkt> getProducts() {
        return Collections.singletonList(new Produkt(1L, "Sla", "EM-Te", "sla.jpg"));
    }
}
