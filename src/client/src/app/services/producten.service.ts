import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {Product} from "../product";
import {Eenheid} from "../eenheid";

@Injectable()
export class ProductenService {
    productenMap = new Map<number, Product>();
    productenObserver = new Subject();

    constructor() {
         this.addNewProduct(new Product(1, 'Sla', 'sla.jpg', Eenheid.STUKS, 1));
         this.addNewProduct(new Product(2, 'Bloemkool', 'bloemkool.png', Eenheid.STUKS, 1));
         this.addNewProduct(new Product(3, 'Sperziebonen', 'sperziebonen.jpg', Eenheid.GRAM, 1));
         this.addNewProduct(new Product(4, 'Aardappelen', 'zak_aardappels.png', Eenheid.ZAK, 1));
         this.addNewProduct(new Product(5, 'Uien (rode)', 'rode_uien.jpg', Eenheid.STUKS, 1));
         this.addNewProduct(new Product(6, 'Zuurkool', 'zuurkool-naturel.jpg', Eenheid.ZAK, 1));
         this.addNewProduct(new Product(7, 'Boerenkool', 'boerenkool.jpg', Eenheid.ZAK, 1));
         this.addNewProduct(new Product(8, 'Hutspot', 'hutspot.jpg', Eenheid.ZAK, 1));
         this.addNewProduct(new Product(9, 'Slamix', 'slamix.jpg', Eenheid.ZAK, 1));
         this.addNewProduct(new Product(10, 'Andijvie', 'andijvie.jpg', Eenheid.ZAK, 1));
         this.addNewProduct(new Product(11, 'Bananen', 'bananen.jpg', Eenheid.STUKS, 2));
         this.addNewProduct(new Product(12, 'Elstar appels', 'elstar.jpg', Eenheid.ZAK, 2));
         this.addNewProduct(new Product(13, 'Granny Smith', 'granny-smith.jpg', Eenheid.STUKS, 2));
         this.addNewProduct(new Product(14, 'Jonagold', 'jonagold.jpg', Eenheid.STUKS, 2));
         this.addNewProduct(new Product(15, 'Mandarijnen', 'mandarijnen.jpg', Eenheid.ZAK, 2));
         this.addNewProduct(new Product(16, 'Druiven pitloos wit', 'druiven-wit.png', Eenheid.STUKS, 2));
         this.addNewProduct(new Product(17, 'Meloen galia', 'galia-meloen.jpg', Eenheid.STUKS, 2));
         this.addNewProduct(new Product(18, 'Spinazie groot', 'spinazie.png', Eenheid.POT_GROOT, 3));
         this.addNewProduct(new Product(19, 'Spinazie klein', 'spinazie.png', Eenheid.POT_KLEIN, 3));
         this.addNewProduct(new Product(20, 'Doperwten', 'doperwten.png', Eenheid.POT_GROOT, 3));
         this.addNewProduct(new Product(21, 'Wortelen', 'worteltjes.png', Eenheid.POT_GROOT, 3));
         this.addNewProduct(new Product(22, 'Rode kool m. appel', 'rode-kool-appel.png', Eenheid.POT_GROOT, 3));
         this.addNewProduct(new Product(23, 'Rode bieten', 'rode-bieten.png', Eenheid.POT_KLEIN, 3));
         this.addNewProduct(new Product(24, 'Ananasschijven', 'ananasschijven.png', Eenheid.BLIK_KLEIN, 3));
         this.addNewProduct(new Product(25, 'Fruitcocktail', 'fruitcocktail.jpg', Eenheid.BLIK_GROOT, 3));
         this.addNewProduct(new Product(26, 'Blue Band light', 'blue-band-light.png', Eenheid.FLES, 4));
         this.addNewProduct(new Product(27, 'Blue Band pakje', 'blue-band-pakje.jpg', Eenheid.STUKS, 4));
         this.addNewProduct(new Product(28, 'Vanillevla', 'vanillevla.png', Eenheid.PAK, 4));
         this.addNewProduct(new Product(29, 'Optimel Framboos', 'optimel-framboos.jpg', Eenheid.PAK, 4));
         this.addNewProduct(new Product(30, 'Optimel Mango-Passievrucht', 'optimel-mango-passievrucht.jpg', Eenheid.PAK, 4));
         this.addNewProduct(new Product(31, 'Slagroom', 'slagroom.jpg', Eenheid.FLES, 4));
         this.addNewProduct(new Product(32, 'Yoghurt', 'yoghurt.jpg', Eenheid.PAK, 4));
         this.addNewProduct(new Product(33, 'Macaroni', 'macaroni.jpg', Eenheid.ZAK, 24));
         this.addNewProduct(new Product(34, 'Spaghetti', 'spaghetti.jpg', Eenheid.ZAK, 24));
         this.addNewProduct(new Product(35, 'Mix voor macaroni/spaghetti', 'mix-voor-macaroni-spaghetti.jpeg', Eenheid.DOOS, 23));
         this.addNewProduct(new Product(37, 'Spaghettisaus Bolognese', 'spaghettisaus-bolognese.png', Eenheid.POT_GROOT, 5));
         this.addNewProduct(new Product(38, 'Chicken Tonight Hawaii', 'chicken-tonight.jpg', Eenheid.POT_GROOT, 23));
         this.addNewProduct(new Product(39, 'Rijst', 'lassie-rijst.png', Eenheid.PAK, 24));
         this.addNewProduct(new Product(40, 'Mie nestjes', 'mie-nestjes.png', Eenheid.DOOS, 24));
         this.addNewProduct(new Product(41, 'Gehakt runder', 'rundergehakt.jpg', Eenheid.GRAM, 6));
         this.addNewProduct(new Product(42, 'Slavinken', 'slavinken.jpg', Eenheid.STUKS, 6));
         this.addNewProduct(new Product(43, 'Zigeunerschnitzel', 'zigeunerschnitzel.jpg', Eenheid.STUKS, 6));
         this.addNewProduct(new Product(44, 'Kipfilet 2st.', 'kipfilet-2stuks.jpg', Eenheid.PAK, 6));
         this.addNewProduct(new Product(45, 'Kipfilet 3st.', 'kipfilet-3stuks.jpg', Eenheid.PAK, 6));
         this.addNewProduct(new Product(46, 'Sausijsjes', 'sausijsjes.jpg', Eenheid.STUKS, 6));
         this.addNewProduct(new Product(47, 'Kip vleugels', 'kipvleugels.jpg', Eenheid.PAK, 6));
         this.addNewProduct(new Product(48, 'Varkens/runder carre', 'varkenscarre.jpg', Eenheid.STUKS, 6));
         this.addNewProduct(new Product(49, 'Schnitzel naturel', 'schnitzel-naturel.jpg', Eenheid.STUKS, 6));
         this.addNewProduct(new Product(50, 'Kipschnitzel', 'kipschnitzel.jpg', Eenheid.STUKS, 6));
         this.addNewProduct(new Product(51, 'Rookworst fijn', 'rookworst.png', Eenheid.STUKS, 6));
         this.addNewProduct(new Product(52, 'Shoarma', 'shoarma.jpg', Eenheid.GRAM, 6));
         this.addNewProduct(new Product(53, 'Hamlappen', 'hamlappen.jpg', Eenheid.GRAM, 6));
         this.addNewProduct(new Product(54, 'Blikboterhamworst', 'boterhamworst.jpg', Eenheid.STUKS, 7));
         this.addNewProduct(new Product(55, 'Sategehakt', 'sategehakt.png', Eenheid.STUKS, 7));
         this.addNewProduct(new Product(56, 'Schouderham', 'schouderham.jpg', Eenheid.STUKS, 7));
         this.addNewProduct(new Product(57, 'Schwarzwalder schinken', 'schwarzwalder-schinken.jpg', Eenheid.STUKS, 7));
         this.addNewProduct(new Product(58, 'Zeeuws spek', 'zeeuws-spek.jpg', Eenheid.STUKS, 7));
         this.addNewProduct(new Product(59, 'Katenspek', 'katenspek.jpg', Eenheid.STUKS, 7));
         this.addNewProduct(new Product(60, 'Filet Americain', 'filet-americain.png', Eenheid.STUKS, 7));
         this.addNewProduct(new Product(61, 'Leverworst', 'leverworst.png', Eenheid.STUKS, 7));
         this.addNewProduct(new Product(62, 'Huzarensalade', 'huzarensalade.jpg', Eenheid.STUKS, 7));
         this.addNewProduct(new Product(63, 'Augurken', 'augurken.jpg', Eenheid.POT_GROOT, 8));
         this.addNewProduct(new Product(64, 'Kroepoek normaal', 'kroepoek-normaal.jpg', Eenheid.ZAK, 23));
         this.addNewProduct(new Product(65, 'Kroepoek cassave', 'kroepoek-cassave.png', Eenheid.ZAK, 23));
         this.addNewProduct(new Product(66, 'Ketjap Manis', 'ketjap-manis.jpg', Eenheid.FLES, 8));
         this.addNewProduct(new Product(67, 'Mayonaise', 'mayonaise-calve.jpg', Eenheid.POT_GROOT, 25));
         this.addNewProduct(new Product(68, 'Remia fritessaus light', 'remia-fritessaus-light.jpg', Eenheid.FLES, 25));
         this.addNewProduct(new Product(69, 'Curry Gewurz', 'curry.jpg', Eenheid.FLES, 25));
         this.addNewProduct(new Product(70, 'Fritessaus Americain', 'fritessaus-americain.jpg', Eenheid.FLES, 25));
         this.addNewProduct(new Product(71, 'Slasaus halfvol', 'calve-slasaus-halfvol.jpg', Eenheid.FLES, 8));
         this.addNewProduct(new Product(72, 'Diamantvet 2 ltr.', 'diamant-vet.jpg', Eenheid.FLES, 17));
         this.addNewProduct(new Product(73, 'Natuurazijn', 'natuurazijn.png', Eenheid.FLES, 8));
         this.addNewProduct(new Product(74, 'Whisky cocktail', 'calve-whiskey-cocktail.jpg', Eenheid.FLES, 25));
         this.addNewProduct(new Product(76, 'Maggi soep', 'maggi-soep.jpg', Eenheid.FLES, 21));
         this.addNewProduct(new Product(77, 'Kerrie ananas', 'kerrie-ananas.jpg', Eenheid.FLES, 25));
         this.addNewProduct(new Product(78, 'Tomaten-groentensoep', 'tomaten-groentesoep.jpg', Eenheid.PAK, 21));
         this.addNewProduct(new Product(79, 'Drinkbouillon tuinkruiden', 'maggi-drinkbouillon-tuinkruiden.png', Eenheid.POT_KLEIN, 21));
         this.addNewProduct(new Product(80, 'Bouillonblokjes', 'maggi-bouillonblokjes.jpg', Eenheid.DOOS, 21));
         this.addNewProduct(new Product(81, 'Vleesjus rundvlees', 'vleesjus-rundvlees.png', Eenheid.ZAK, 8));
         this.addNewProduct(new Product(82, 'Kaas stuk jong belegen', 'kaas-stuk.jpg', Eenheid.STUKS, 9));
         this.addNewProduct(new Product(83, 'Geraspte kaas jong belegen', 'geraspte-kaas.png', Eenheid.ZAK, 9));
         this.addNewProduct(new Product(84, 'Kaasblokjes jong belegen', 'kaasblokjes.png', Eenheid.ZAK, 9));
         this.addNewProduct(new Product(85, 'Kruidenboter', 'kruidenboter.png', Eenheid.STUKS, 9));
         this.addNewProduct(new Product(86, 'Cola light 4-pack 1,25 liter', 'cola-light-4pack.jpg', Eenheid.STUKS, 10));
         this.addNewProduct(new Product(87, 'Cola 4-pack 1,25 liter', 'cola-4pack.png', Eenheid.STUKS, 10));
         this.addNewProduct(new Product(88, 'Cola 1,5 liter', 'cola-1.5-liter.jpg', Eenheid.STUKS, 10));
         this.addNewProduct(new Product(89, 'Cola light 1,5 liter', 'cola-light-1.5-liter.jpg', Eenheid.STUKS, 10));
         this.addNewProduct(new Product(90, 'Sinas light', 'sinas-light.png', Eenheid.FLES, 10));
         this.addNewProduct(new Product(91, 'Spa orange', 'spa-orange.jpg', Eenheid.FLES, 10));
         this.addNewProduct(new Product(92, 'Hertog Jan bier krat', 'hertog-jan-krat.jpg', Eenheid.STUKS, 10));
         this.addNewProduct(new Product(93, 'Port Tawny', 'port.png', Eenheid.FLES, 10));
         this.addNewProduct(new Product(94, 'Wicky oranje groot', 'wicky-groot-oranje.jpg', Eenheid.STUKS, 11));
         this.addNewProduct(new Product(95, 'Wicky rose groot', 'wicky-groot-rose.jpg', Eenheid.STUKS, 11));
         this.addNewProduct(new Product(96, 'Wicky oranje klein', 'wicky-klein-oranje.jpg', Eenheid.STUKS, 11));
         this.addNewProduct(new Product(97, 'Wicky blauw klein', 'wicky-klein-blauw.jpg', Eenheid.STUKS, 11));
         this.addNewProduct(new Product(98, 'Wicky rose klein', 'wicky-klein-rose.jpg', Eenheid.STUKS, 11));
         this.addNewProduct(new Product(99, 'Wicky groen klein', 'wicky-klein-groen.jpg', Eenheid.STUKS, 11));
         this.addNewProduct(new Product(100, 'Spa  bosvruchten', 'spa-bosvruchten.jpg', Eenheid.PAK, 11));
         this.addNewProduct(new Product(101, 'IJsthee citroen', 'ijsthee-citroen.png', Eenheid.PAK, 11));
         this.addNewProduct(new Product(102, 'IJsthee perzik', 'ijsthee-perzik.png', Eenheid.PAK, 11));
         this.addNewProduct(new Product(103, 'Harde worst', 'harde-worst.jpg', Eenheid.STUKS, 12));
         this.addNewProduct(new Product(104, 'Smac groot', 'smac.jpg', Eenheid.STUKS, 22));
         this.addNewProduct(new Product(105, 'Sate balletjes', 'gehaktballetjes-in-sate.png', Eenheid.BLIK_KLEIN, 22));
         this.addNewProduct(new Product(106, 'Cocktailworstjes', 'cocktailworstjes.jpg', Eenheid.BLIK_KLEIN, 12));
         this.addNewProduct(new Product(107, 'Toastjes (mini-crackers', 'lu-mini-crackers.jpg', Eenheid.DOOS, 12));
         this.addNewProduct(new Product(108, 'Pepsels stokjes', 'pepsels.png', Eenheid.ZAK, 12));
         this.addNewProduct(new Product(109, 'Chocomel halfvol', 'chocomelk-halfvol-liter.png', Eenheid.LITER, 12));
         this.addNewProduct(new Product(110, 'Andy lavendel', 'andy-lavendel.jpg', Eenheid.FLES, 13));
         this.addNewProduct(new Product(111, 'Dikbleek', 'dikbleek.png', Eenheid.FLES, 13));
         this.addNewProduct(new Product(112, 'Vaatwastabletten', 'vaatwastabletten.jpg', Eenheid.DOOS, 13));
         this.addNewProduct(new Product(113, 'Vaatwaszout', 'vaatwaszout.jpg', Eenheid.DOOS, 13));
         this.addNewProduct(new Product(114, 'Glansspoelmiddel', 'glansspoelmiddel.jpg', Eenheid.FLES, 13));
         this.addNewProduct(new Product(115, 'Omo vloeibaar blauwe dop', 'omo-vloeibaar-blauwe-dop.jpg', Eenheid.FLES, 13));
         this.addNewProduct(new Product(116, 'Omo vloeibaar paarse dop', 'omo-vloeibaar-paarse-dop.jpg', Eenheid.FLES, 13));
         this.addNewProduct(new Product(117, 'Schatkistjes', 'schatkistjes.jpg', Eenheid.ZAK, 14));
         this.addNewProduct(new Product(118, 'Skittles uitdeelzakjes', 'skittles.png', Eenheid.ZAK, 14));
         this.addNewProduct(new Product(119, 'Pepermunt', 'wilhelmina-pepermunt.jpg', Eenheid.PAK, 14));
         this.addNewProduct(new Product(120, 'Café noir', 'cafe-noir.png', Eenheid.PAK, 14));
         this.addNewProduct(new Product(121, 'Biskwie', 'biskwie.jpg', Eenheid.PAK, 14));
         this.addNewProduct(new Product(122, 'Brinkys', 'brinkys.jpg', Eenheid.ZAK, 14));
         this.addNewProduct(new Product(123, 'Biskwie met kokos', 'kokos-biscuit.jpg', Eenheid.PAK, 14));
         this.addNewProduct(new Product(124, 'Shampoo iedere dag', 'shampoo-iedere-dag.jpg', Eenheid.FLES, 15));
         this.addNewProduct(new Product(125, 'Shampoo glans', 'shampoo-glans.png', Eenheid.FLES, 15));
         this.addNewProduct(new Product(126, 'Handzeep', 'palmolive-handzeep.png', Eenheid.PAK, 15));
         this.addNewProduct(new Product(127, 'Tandpasta', 'prodent-tandpasta-soft-mint.jpg', Eenheid.STUKS, 15));
         this.addNewProduct(new Product(128, 'Douchegel rose dop', 'derlon-douchegel.jpg', Eenheid.STUKS, 15));
         this.addNewProduct(new Product(129, 'Gel geel', 'gel.gif', Eenheid.POT_KLEIN, 15));
         this.addNewProduct(new Product(130, 'Billendoekjes Ikke doen', 'ikke-doen.jpg', Eenheid.ZAK, 15));
         this.addNewProduct(new Product(131, 'Wattenstaafjes', 'wattenstaafjes.jpg', Eenheid.PAK, 15));
         this.addNewProduct(new Product(132, 'Haarlak blauw', 'junior-haarlak.jpg', Eenheid.FLES, 15));
         this.addNewProduct(new Product(133, 'Fruitbiscuit Sultana-achtig', 'fruitbiscuit-appel.png', Eenheid.PAK, 18));
         this.addNewProduct(new Product(134, 'Italiaanse kruiden', 'italiaanse-kruiden-hartig.png', Eenheid.PAK, 18));
         this.addNewProduct(new Product(135, 'Oploskoffie', 'oploskoffie.jpg', Eenheid.POT_GROOT, 16));
         this.addNewProduct(new Product(136, 'Theezakjes 1 kop', 'theezakjes.png', Eenheid.DOOS, 16));
         this.addNewProduct(new Product(137, 'Koffie 250 gr Snelfiltermaling', 'de-koffie-snelfilter.jpg', Eenheid.PAK, 16));
         this.addNewProduct(new Product(138, 'Poedersuiker', 'poedersuiker.jpg', Eenheid.STUKS, 16));
         this.addNewProduct(new Product(139, 'Mix voor appeltaart', 'mix-voor-appeltaart.jpg', Eenheid.PAK, 17));
         this.addNewProduct(new Product(140, 'Mix voor eierpannekoeken', 'mix-voor-eierpannekoeken.jpg', Eenheid.PAK, 17));
         this.addNewProduct(new Product(141, 'Mix voor muffins naturel', 'mix-muffins.jpg', Eenheid.DOOS, 17));
         this.addNewProduct(new Product(142, 'Schenkstroop', 'schenkstroop.jpg', Eenheid.FLES, 17));
         this.addNewProduct(new Product(143, 'Pindakaas light', 'pindakaas-light.gif', Eenheid.POT_KLEIN, 18));
         this.addNewProduct(new Product(144, 'Pita broodjes', 'pita-broodjes.jpg', Eenheid.ZAK, 18));
         this.addNewProduct(new Product(145, 'Kersenjam', 'kersenjam.jpg', Eenheid.POT_KLEIN, 18));
         this.addNewProduct(new Product(146, 'Abrikozenjam', 'abrikozenjam.png', Eenheid.POT_KLEIN, 18));
         this.addNewProduct(new Product(147, 'Aardbeienjam', 'aardbeienjam.png', Eenheid.POT_KLEIN, 18));
         this.addNewProduct(new Product(148, 'Sandwichspread natural', 'sandwichspread.png', Eenheid.POT_KLEIN, 18));
         this.addNewProduct(new Product(149, 'Appelstroop rinse', 'appelstroop.jpg', Eenheid.POT_KLEIN, 18));
         this.addNewProduct(new Product(150, 'Boterhamzakjes', 'boterhamzakjes.jpg', Eenheid.DOOS, 19));
         this.addNewProduct(new Product(151, 'Muesli met chocola', 'muesli-chocolade.png', Eenheid.DOOS, 19));
         this.addNewProduct(new Product(152, 'Rijstwafels', 'rijstwafels.png', Eenheid.PAK, 19));
         this.addNewProduct(new Product(153, 'Mini frites', 'mini-frites.png', Eenheid.ZAK, 20));
         this.addNewProduct(new Product(154, 'Frikandellen 20st.', 'frikandellen-20st.png', Eenheid.DOOS, 20));
         this.addNewProduct(new Product(155, 'Kipfingers', 'kipfingers.jpg', Eenheid.DOOS, 20));
         this.addNewProduct(new Product(156, 'Kroketten', 'kroketten.jpg', Eenheid.DOOS, 20));
         this.addNewProduct(new Product(157, 'Gehaktballetjes in zout-zure saus', 'gehaktballetjes-zoet-zure-saus.jpg', Eenheid.STUKS, 20));
         this.addNewProduct(new Product(158, 'Sate mild', 'sate-mild.jpg', Eenheid.STUKS, 20));
         this.addNewProduct(new Product(159, 'Hamburgers', 'hamburgers.jpg', Eenheid.DOOS, 20));
         this.addNewProduct(new Product(160, 'Bitterballen', 'bitterballen.jpg', Eenheid.ZAK, 20));
         this.addNewProduct(new Product(161, 'Cakemix', 'geen_afbeelding.jpg', Eenheid.PAK, 17));
         this.addNewProduct(new Product(164, 'Dubbelfris witte druif', 'geen_afbeelding.jpg', Eenheid.PAK, 11));
         this.addNewProduct(new Product(165, 'Citroenthee 1 kops', 'geen_afbeelding.jpg', Eenheid.DOOS, 16));
         this.addNewProduct(new Product(166, 'Bosvruchtenthee 1 kops', 'geen_afbeelding.jpg', Eenheid.DOOS, 16));
         this.addNewProduct(new Product(167, 'Koffiemelkcups', 'geen_afbeelding.jpg', Eenheid.PAK, 16));
         this.addNewProduct(new Product(168, 'Mosterdrollade', 'mosterdrollade.jpg', Eenheid.STUKS, 7));
         this.addNewProduct(new Product(169, 'Dubbelfris perzik +', 'geen_afbeelding.jpg', Eenheid.PAK, 11));
         this.addNewProduct(new Product(170, 'Optimel Aardbei', 'optimel-aardbei.png', Eenheid.LITER, 4));
         this.addNewProduct(new Product(171, 'Dextro Energy Classic', 'geen_afbeelding.jpg', Eenheid.PAK, 14));
         this.addNewProduct(new Product(172, 'Sperziebonen', 'sperziebonen-pot.png', Eenheid.POT_GROOT, 3));
         this.addNewProduct(new Product(174, 'Kl pakjes chocomelk', 'geen_afbeelding.jpg', Eenheid.PAK, 10));
         this.addNewProduct(new Product(175, 'Vuilniszak blauw', 'geen_afbeelding.jpg', Eenheid.STUKS, 20));
         this.addNewProduct(new Product(176, 'Snackerjacks bbq', 'geen_afbeelding.jpg', Eenheid.PAK, 19));
         this.addNewProduct(new Product(177, 'Snackerjacks cheese', 'geen_afbeelding.jpg', Eenheid.PAK, 19));
         this.addNewProduct(new Product(178, 'Gehaktschnitsels', 'gehaktschnitzels.png', Eenheid.PAK, 6));
         this.addNewProduct(new Product(179, 'Riblappen', 'riblappen.jpeg', Eenheid.GRAM, 6));
         this.addNewProduct(new Product(180, 'Soepgroenten', 'soepgroenten.jpeg', Eenheid.ZAK, 1));
         this.addNewProduct(new Product(181, 'Filterzakjes', 'geen_afbeelding.jpg', Eenheid.PAK, 16));
         this.addNewProduct(new Product(182, 'Sultana kaneel', 'geen_afbeelding.jpg', Eenheid.PAK, 16));
         this.addNewProduct(new Product(184, 'Dressing honing mosterd', 'geen_afbeelding.jpg', Eenheid.FLES, 8));
         this.addNewProduct(new Product(185, 'Boerenmetworst', 'boerenmetworst.jpeg', Eenheid.STUKS, 7));
         this.addNewProduct(new Product(186, 'Toiletblop eigenmerk', 'geen_afbeelding.jpg', Eenheid.STUKS, 13));
         this.addNewProduct(new Product(187, 'Kipfilet', 'kipfilet.jpeg', Eenheid.GRAM, 7));
         this.addNewProduct(new Product(188, 'Komkommer', 'komkommer.jpeg', Eenheid.STUKS, 1));
         this.addNewProduct(new Product(189, 'Olijfolie', 'geen_afbeelding.jpg', Eenheid.FLES, 8));
         this.addNewProduct(new Product(190, 'Cristal clear citroen', 'geen_afbeelding.jpg', Eenheid.PAK, 11));
         this.addNewProduct(new Product(191, 'Heksenkaas', 'geen_afbeelding.jpg', Eenheid.STUKS, 9));
         this.addNewProduct(new Product(193, 'Tostibrood', 'geen_afbeelding.jpg', Eenheid.STUKS, 18));
         this.addNewProduct(new Product(194, 'Gourmetschotel', 'gourmetschotel.jpeg', Eenheid.STUKS, 6));
         this.addNewProduct(new Product(195, 'Scheermesjes blauw', 'geen_afbeelding.jpg', Eenheid.STUKS, 15));
         this.addNewProduct(new Product(196, 'Dubbelfris mandarijn', 'geen_afbeelding.jpg', Eenheid.PAK, 11));
         this.addNewProduct(new Product(198, 'Zout', 'geen_afbeelding.jpg', Eenheid.POT_GROOT, 8));
         this.addNewProduct(new Product(199, 'Kerriepoeder', 'kerriepoeder.jpg', Eenheid.POT_KLEIN, 5));
         this.addNewProduct(new Product(200, 'Plasticafval zk', 'geen_afbeelding.jpg', Eenheid.STUKS, 15));
         this.addNewProduct(new Product(201, 'Lekker toetje', 'lekker-toetje.jpeg', Eenheid.STUKS, 4));
         this.addNewProduct(new Product(202, 'Spekblokjes mager', 'spekblokjes.jpeg', Eenheid.PAK, 7));
         this.addNewProduct(new Product(204, 'Broccolli', 'broccoli.jpeg', Eenheid.STUKS, 1));
         this.addNewProduct(new Product(205, 'Paprika rood', 'paprika-rood.jpeg', Eenheid.STUKS, 1));
         this.addNewProduct(new Product(206, 'Biefstuk', 'biefstuk.png', Eenheid.STUKS, 6));
         this.addNewProduct(new Product(207, 'Toilet blokje', 'geen_afbeelding.jpg', Eenheid.STUKS, 13));
         this.addNewProduct(new Product(208, 'Tomatensoep', 'tomatensoep.jpg', Eenheid.BLIK_GROOT, 21));
         this.addNewProduct(new Product(209, 'Tomatensoep klein', 'tomatensoep-klein.jpg', Eenheid.BLIK_GROOT, 21));
         this.addNewProduct(new Product(210, 'Badkamer reiniger 3g', 'geen_afbeelding.jpg', Eenheid.FLES, 13));
         this.addNewProduct(new Product(211, 'Crackers', 'geen_afbeelding.jpg', Eenheid.PAK, 19));
         this.addNewProduct(new Product(212, 'Sandwichspread tomaat', 'geen_afbeelding.jpg', Eenheid.POT_GROOT, 18));
         this.addNewProduct(new Product(213, 'Matses', 'geen_afbeelding.jpg', Eenheid.DOOS, 19));
         this.addNewProduct(new Product(214, 'Crackers vezelrijk', 'geen_afbeelding.jpg', Eenheid.STUKS, 19));
         this.addNewProduct(new Product(215, 'Cocktailprikkers', 'geen_afbeelding.jpg', Eenheid.DOOS, 20));
         this.addNewProduct(new Product(216, 'Sate prikkers', 'geen_afbeelding.jpg', Eenheid.DOOS, 20));
         this.addNewProduct(new Product(217, 'Babi ketjap conimex', 'mix-voor-babi-ketjap.png', Eenheid.PAK, 23));
         this.addNewProduct(new Product(218, 'Maizena', 'maizena.jpeg', Eenheid.PAK, 8));
         this.addNewProduct(new Product(219, 'Zak zuurtjes', 'geen_afbeelding.jpg', Eenheid.ZAK, 14));
         this.addNewProduct(new Product(220, 'Kipschnitsels ambachtelijk', 'kipschnitzel-ambachtelijk.jpeg', Eenheid.STUKS, 6));
         this.addNewProduct(new Product(221, 'Wicky rood klein', 'geen_afbeelding.jpg', Eenheid.STUKS, 11));
         this.addNewProduct(new Product(222, 'Mix voor kwarktaart naturel', 'geen_afbeelding.jpg', Eenheid.STUKS, 17));
         this.addNewProduct(new Product(223, 'Smokey BBQ Honey', 'remia-sweet-honey-bbq-saus.jpeg', Eenheid.FLES, 25));
         this.addNewProduct(new Product(224, 'Voque deo rose', 'geen_afbeelding.jpg', Eenheid.FLES, 15));
         this.addNewProduct(new Product(225, 'Schuursponsjes', 'geen_afbeelding.jpg', Eenheid.PAK, 13));
         this.addNewProduct(new Product(227, 'M&Ms', 'geen_afbeelding.jpg', Eenheid.ZAK, 14));
         this.addNewProduct(new Product(228, 'Losse wraps', 'losse-wraps.jpg', Eenheid.ZAK, 23));
         this.addNewProduct(new Product(229, 'Salami', 'geen_afbeelding.jpg', Eenheid.STUKS, 7));
         this.addNewProduct(new Product(230, 'Verse hamburgers', 'verse-hamburger.jpg', Eenheid.STUKS, 6));
         this.addNewProduct(new Product(231, 'Dubro badkamerreiniger', 'geen_afbeelding.jpg', Eenheid.FLES, 13));
         this.addNewProduct(new Product(232, 'Wicky groot rood', 'geen_afbeelding.jpg', Eenheid.PAK, 11));
         this.addNewProduct(new Product(233, 'Wicky groot blauw', 'geen_afbeelding.jpg', Eenheid.PAK, 11));
         this.addNewProduct(new Product(234, 'Schuimpjes', 'geen_afbeelding.jpg', Eenheid.ZAK, 14));
         this.addNewProduct(new Product(235, 'Komo vuilniszak', 'geen_afbeelding.jpg', Eenheid.ZAK, 20));
         this.addNewProduct(new Product(236, 'Aanmaakblokjes', 'geen_afbeelding.jpg', Eenheid.DOOS, 20));
         this.addNewProduct(new Product(237, 'Unox rookworst', 'geen_afbeelding.jpg', Eenheid.STUKS, 12));
         this.addNewProduct(new Product(238, 'Verse slagroom', 'verse-slagroom.jpg', Eenheid.PAK, 4));
         this.addNewProduct(new Product(239, 'Hamblokjes', 'geen_afbeelding.jpg', Eenheid.PAK, 7));
         this.addNewProduct(new Product(240, 'Frikandel 5 st', 'geen_afbeelding.jpg', Eenheid.DOOS, 20));
         this.addNewProduct(new Product(241, 'Sate saus', 'geen_afbeelding.jpg', Eenheid.ZAK, 8));
         this.addNewProduct(new Product(242, 'Suikervrije hagelslag', 'geen_afbeelding.jpg', Eenheid.DOOS, 17));
         this.addNewProduct(new Product(243, 'Saté schnitzel', 'sate-schnitzel.jpg', Eenheid.STUKS, 6));
         this.addNewProduct(new Product(244, 'Panneermeel', 'geen_afbeelding.jpg', Eenheid.DOOS, 8));
         this.addNewProduct(new Product(245, 'Slimpie aanmaak framb', 'geen_afbeelding.jpg', Eenheid.FLES, 11));
         this.addNewProduct(new Product(246, 'Eiersalade', 'geen_afbeelding.jpg', Eenheid.STUKS, 7));
         this.addNewProduct(new Product(247, 'Macaronigroenten', 'macaroni-groenten.jpg', Eenheid.DOOS, 1));
         this.addNewProduct(new Product(248, 'Gelatinebladen', 'geen_afbeelding.jpg', Eenheid.STUKS, 17));
         this.addNewProduct(new Product(249, 'Amandelmeel(koopmans', 'geen_afbeelding.jpg', Eenheid.DOOS, 17));
         this.addNewProduct(new Product(250, 'Bekertjes roomijs', 'geen_afbeelding.jpg', Eenheid.DOOS, 20));
         this.addNewProduct(new Product(251, 'Omo vloeibaar rose dop', 'geen_afbeelding.jpg', Eenheid.FLES, 13));
         this.addNewProduct(new Product(252, 'Vanille ijs (oke)', 'geen_afbeelding.jpg', Eenheid.PAK, 20));
         this.addNewProduct(new Product(253, 'Rosekoek met smarties', 'geen_afbeelding.jpg', Eenheid.STUKS, 14));
         this.addNewProduct(new Product(254, 'Radler 0.0', 'geen_afbeelding.jpg', Eenheid.STUKS, 10));
         this.addNewProduct(new Product(255, '7up', 'geen_afbeelding.jpg', Eenheid.FLES, 10));
         this.addNewProduct(new Product(256, 'Aardappelbolletjes', 'aardappelbolletjes.jpg', Eenheid.ZAK, 1));
         this.addNewProduct(new Product(257, 'Wc eend', 'geen_afbeelding.jpg', Eenheid.FLES, 13));
         this.addNewProduct(new Product(258, 'Pedaalemmerzakken', 'geen_afbeelding.jpg', Eenheid.STUKS, 20));
         this.addNewProduct(new Product(259, 'Pedaalemmerzak 20 ltr', 'geen_afbeelding.jpg', Eenheid.STUKS, 20));
         this.addNewProduct(new Product(260, 'Rosé bier', 'geen_afbeelding.jpg', Eenheid.FLES, 10));
         this.addNewProduct(new Product(261, 'Muffin vormpjes', 'geen_afbeelding.jpg', Eenheid.STUKS, 20));
         this.addNewProduct(new Product(262, 'Varkenshaas', 'varkenshaas.jpg', Eenheid.GRAM, 6));
         this.addNewProduct(new Product(263, 'Mango', 'mango.jpg', Eenheid.POT_GROOT, 3));
         this.addNewProduct(new Product(264, 'Erwtensoep klein', 'erwtensoep-klein.jpg', Eenheid.BLIK_KLEIN, 21));
         this.addNewProduct(new Product(265, 'Ijsblokzakjes', 'geen_afbeelding.jpg', Eenheid.DOOS, 19));
         this.addNewProduct(new Product(266, 'Lijnzaad( zonnatura', 'geen_afbeelding.jpg', Eenheid.ZAK, 17));
         this.addNewProduct(new Product(267, 'Agf afvalzk', 'geen_afbeelding.jpg', Eenheid.STUKS, 20));
         this.addNewProduct(new Product(268, 'Thee winterglow', 'geen_afbeelding.jpg', Eenheid.DOOS, 16));
         this.addNewProduct(new Product(269, 'Ongezouten pindas', 'geen_afbeelding.jpg', Eenheid.ZAK, 12));
         this.addNewProduct(new Product(270, 'Ongezouten cashew', 'geen_afbeelding.jpg', Eenheid.ZAK, 12));
         this.addNewProduct(new Product(271, 'Pecannootjes', 'geen_afbeelding.jpg', Eenheid.ZAK, 12));
         this.addNewProduct(new Product(272, 'Koffiepads dark', 'geen_afbeelding.jpg', Eenheid.ZAK, 16));
         this.addNewProduct(new Product(273, 'Tomatencreme soep', 'geen_afbeelding.jpg', Eenheid.BLIK_KLEIN, 21));
         this.addNewProduct(new Product(274, 'Teriakisaus', 'geen_afbeelding.jpg', Eenheid.FLES, 8));
         this.addNewProduct(new Product(275, 'Teriakiwoksaus', 'geen_afbeelding.jpg', Eenheid.FLES, 8));
    }

    addNewProduct(product: Product): void {
        this.productenMap.set(product.id, product);
    }
    
    getProducten(): Product[] {
        return Array.from(this.productenMap.values());
    }

    getProductenFor(productGroepId: number): Product[] {
        var productIterator = this.productenMap.values();
        var productResult = productIterator.next();
        var productsForGroupId = [];

        while (!productResult.done) {
            var product = productResult.value;
            if (product.productGroepid == productGroepId) {
                productsForGroupId.push(product);
            }
            productResult = productIterator.next();
        }
        return productsForGroupId;
    }

    getProduct(selectedProductId: number) : Product {
         // TODO use this.productenMap.get(selectedProductId);

         var keyIterator = this.productenMap.keys();
         var keyResult = keyIterator.next();
         while (!keyResult.done) {
              if (keyResult.value == selectedProductId) {
                   return this.productenMap.get(keyResult.value);
              }
              keyResult = keyIterator.next();
         }
         return this.productenMap.get(selectedProductId);
    }

    editProduct(selectedProductId: number, newProductName: string, newEenheid: Eenheid) {
         var product = this.getProduct(selectedProductId);
         if (product.naam != newProductName || product.eenheid != newEenheid) {
              product.naam = newProductName;
              product.eenheid = newEenheid;
              this.productenMap.set(selectedProductId, product);
         }
         this.informSubscribers(product);
    }

    private informSubscribers(product: Product) {
        this.productenObserver.next(product);
    }
}
