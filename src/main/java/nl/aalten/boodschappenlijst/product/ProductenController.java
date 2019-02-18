package nl.aalten.boodschappenlijst.product;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

import java.util.List;

import javax.inject.Inject;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ProductenController {

    @Inject
    private FileSystemProductenRepository repository;

    @RequestMapping(value = "/products", method = GET)
    public List<Product> getProducts() {
        return repository.getProducts();
    }

    @RequestMapping("/hello")
    public String hello() {
        return "Hello world";
    }

}
