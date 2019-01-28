package nl.aalten.boodschappenlijstje.produkt;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;

import nl.aalten.boodschappenlijstje.domain.ProduktGroep;
import org.springframework.stereotype.Component;

@Component
public class Repository {
    private static final String PERSISTENCE_UNIT_NAME = "boodschappenlijst";
    private static final String SQL_FOR_PRODUKTGROEPEN = "SELECT pg from ProduktGroep pg";
    public static final int BOODSCHAPPENLIJST_NR = 1;

    private EntityManager em;

    public Repository() {
        java.util.Map<Object,Object> map = new java.util.HashMap<Object,Object>();
        EntityManagerFactory factory = Persistence.createEntityManagerFactory(PERSISTENCE_UNIT_NAME, map);
        em = factory.createEntityManager();
    }

    public List<ProduktGroep> getProduktGroepen() {
        Query query = em.createQuery(SQL_FOR_PRODUKTGROEPEN);
        List<ProduktGroep> pgs = (List<ProduktGroep>) query.getResultList();
        return pgs;
    }

}
