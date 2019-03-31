package nl.aalten.boodschappenlijst.output;

import java.io.FileOutputStream;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

import javax.inject.Inject;

import nl.aalten.boodschappenlijst.domain.BoodschappenlijstItem;
import nl.aalten.boodschappenlijst.domain.ProductGroep;
import nl.aalten.boodschappenlijst.storage.filesystem.FileSystemRepository;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import com.itextpdf.text.Chunk;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Element;
import com.itextpdf.text.Font;
import com.itextpdf.text.Phrase;
import com.itextpdf.text.pdf.ColumnText;
import com.itextpdf.text.pdf.PdfWriter;
import com.itextpdf.text.pdf.draw.LineSeparator;

@Component
public class PdfService {
    public static final String SPACE = " ";
    private Font FONT_NORMAL = new Font(Font.FontFamily.HELVETICA, 12);
    private Font FONT_BOLD = new Font(Font.FontFamily.HELVETICA, 12, Font.BOLD);

    /** Definition of two columns */
    public static final float[][] COLUMNS = {
            { 36, 36, 296, 806 } , { 299, 36, 559, 806 }
    };

    private final FileSystemRepository repository;
    private final String fileName;

    @Inject
    public PdfService(
            FileSystemRepository repository,
            @Value("${propertiesPath}") String propertiesPath
    ) {
        this.repository = repository;
        this.fileName = propertiesPath + "boodschappen.pdf";
    }

    public void createPdf() throws Exception {
        List<BoodschappenlijstItem> items = repository.getBoodschappenlijstItems();
        List<ProductGroep> productGroups = repository.getProductGroups();

        Map<ProductGroep, List<BoodschappenlijstItem>> itemsPerProductGroup = items.stream()
                .collect(Collectors.groupingBy(byProductGroup(productGroups)));

        Document document = new Document();
        PdfWriter writer = PdfWriter.getInstance(document, new FileOutputStream(fileName));
        document.open();

        ColumnText ct = new ColumnText(writer.getDirectContent());

        itemsPerProductGroup.keySet().stream()
                .sorted(sortBySortOrder())
                .forEach(pg -> writeProductGroupWithItems(ct, pg, itemsPerProductGroup.get(pg)));

        formatWrittenLines(document, ct);
        document.close();
    }


    private void writeProductGroupWithItems(ColumnText ct, ProductGroep pg, List<BoodschappenlijstItem> items) {
        writeProductGroup(ct, pg);
        items.forEach(item -> {
            writeProduct(ct,item);
        });
    }

    private void writeProductGroup(ColumnText ct, ProductGroep pg) {
        Phrase phrase = new Phrase();
        phrase.add(new Chunk(pg.getNaam(), FONT_BOLD));
        phrase.add(new LineSeparator(0.3f, 100, null, Element.ALIGN_CENTER, -2));
        phrase.add(Chunk.NEWLINE);
        ct.addText(phrase);
    }

    private void writeProduct(ColumnText ct, BoodschappenlijstItem item) {
        Phrase phrase = new Phrase();
        phrase.add("   ");
        phrase.add(new Chunk(item.getProduct().getNaam(), FONT_NORMAL));
        phrase.add(SPACE);
        if (!StringUtils.isEmpty(item.getProduct().getMerk())) {
            phrase.add("(");
            phrase.add(new Chunk(item.getProduct().getMerk(), FONT_NORMAL));
            phrase.add(") ");
        }
        phrase.add(" - ");
        phrase.add(new Chunk(item.getAantal().toString(), FONT_NORMAL));
        phrase.add(SPACE);
        phrase.add(new Chunk(item.getProduct().getEenheid().getDisplayValue(), FONT_NORMAL));
        phrase.add(new LineSeparator(0.3f, 100, null, Element.ALIGN_CENTER, -2));
        phrase.add(lineSeparator());
        phrase.add(Chunk.NEWLINE);
        ct.addText(phrase);
    }

    private Phrase lineSeparator() {
        Phrase phrase = new Phrase();
        phrase.add(new LineSeparator(0.3f, 100, null, Element.ALIGN_CENTER, -2));
        return phrase;
    }

    private Comparator<ProductGroep> sortBySortOrder() {
        return (pg1, pg2) -> {
            if (pg1.getSortOrder() < pg2.getSortOrder()) {
                return -1;
            } else if (pg1.getSortOrder() > pg2.getSortOrder()) {
                return 1;
            }
            return 0;
        };
    }

    private void formatWrittenLines(Document document, ColumnText ct) throws DocumentException {
        ct.setAlignment(Element.ALIGN_JUSTIFIED);
        ct.setExtraParagraphSpace(6);
        ct.setLeading(0, 1.2f);
        ct.setFollowingIndent(27);
        int column = 0;
        int status = ColumnText.START_COLUMN;
        while (ColumnText.hasMoreText(status)) {
            ct.setSimpleColumn(COLUMNS[column][0], COLUMNS[column][1], COLUMNS[column][2], COLUMNS[column][3]);
            ct.setYLine(COLUMNS[column][3]);
            status = ct.go();
            column = Math.abs(column - 1);
            if (column == 0) {
                document.newPage();
            }
        }
        ct.go();
    }
    private Function<BoodschappenlijstItem, ProductGroep> byProductGroup(List<ProductGroep> productGroups) {
        return item -> productGroups.stream()
                .filter(pg -> pg.getId() == item.getProduct().getProductGroepId())
                .findFirst()
                .orElseThrow(() -> new IllegalStateException("No productGroup found for #id " + item.getProduct().getProductGroepId()));
    }
}
