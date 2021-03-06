import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductenService} from "../services/producten.service";
import {Product} from "../product";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Eenheid} from "../eenheid";
import {BoodschappenlijstService} from "../services/boodschappenlijst.service";
import {ProductGroepenService} from "../services/productgroepen.service";
import {ProductGroep} from "../productgroep";

@Component({
  selector: 'product-muteren',
  templateUrl: './product-muteren.component.html',
  styleUrls: ['./product-muteren.component.css']
})
export class ProductMuterenComponent implements OnInit {
  selectedProductId: number;
  selectedProductGroepId: number;
  mode: string;
  product: Product;
  productGroepen: ProductGroep[];
  editForm: FormGroup;
  eenheden: Eenheid[];
  imageAvailable: boolean;
  canDelete = true;

  constructor(
      private route: ActivatedRoute,
      private productenService: ProductenService,
      private productGroepenService: ProductGroepenService,
      private boodschappenLijstService: BoodschappenlijstService,
      private router: Router,
      formBuilder: FormBuilder

  ) {
      route.params.subscribe(params => {this.selectedProductId = Number(params['productId'])});
      route.params.subscribe(params => {this.selectedProductGroepId = Number(params['productGroepId'])});
      this.eenheden = this.productenService.getEenheden();
      this.productGroepen = this.productGroepenService.getProductGroepen();
      if (this.selectedProductId) {
          this.mode = 'Wijzigen';
          this.product = productenService.getProduct(this.selectedProductId);
          this.canDelete = true;
          this.imageAvailable = this.product.imageNaam != 'geen_afbeelding.jpg';
          let imageType = this.imageAvailable ? 'own' : 'NA';
          this.editForm = formBuilder.group({
              'productName'  : [this.product.naam, Validators.required],
              'productGroup' : [this.product.productGroepId, Validators.required],
              'newEenheid'   : [this.product.eenheid.displayValue, Validators.required],
              'imageName'    : [this.product.imageNaam, Validators.required],
              'imageType'    : new FormControl(imageType)
          });
      } else {
          this.mode = 'Toevoegen';
          this.imageAvailable = false;
          this.canDelete = false;
          let imageType = 'NA';
          this.editForm = formBuilder.group({
              'productName' : ["", Validators.required],
              'productGroup' : [this.selectedProductGroepId, Validators.required],
              'newEenheid'  : ["", Validators.required],
              'imageName'  : ["geen_afbeelding.jpg", Validators.required],
              'imageType'  : new FormControl(imageType)
          });
      }
      // let imageTypeGroup = new FormControl("", Validators.required);

  }

  onSubmit(form: any): void {
    if (this.editForm.valid) {
        let newProductName = this.editForm.get("productName").value;
        let newProductGroupId = this.editForm.get("productGroup").value;
        let newImageName = this.editForm.get("imageName").value;
        let newEenheid = this.productenService.toEenheid(this.editForm.get("newEenheid").value);
        if (this.selectedProductId) {
            // edit product
            this.productenService.editProduct(this.selectedProductId, newProductName, newProductGroupId, newImageName, newEenheid);
        } else {
            // add product
            this.product = this.productenService.addNewProduct(this.selectedProductGroepId, newProductName, newImageName, newEenheid);
        }
      this.backToSelectedProductGroup();
    }
  }

  cancelEditing() : void {
      this.router.navigate(['/products', this.selectedProductGroepId]);
  }

  deleteProduct() : void {
      if (confirm('Weet je zeker dat je -' + this.product.naam + '- wilt verwijderen ?')) {
          if (this.boodschappenLijstService.isItemOnList(this.product.id)) {
              alert('Dit product staat nog op je lijst. Verwijder deze eerst uit je lijst en verwijder het product dan opnieuw');
          } else {
              this.productenService.delete(this.product.id);
              this.backToSelectedProductGroup();
          }
      }
  }

  private backToSelectedProductGroup() {
      this.router.navigate(['/products', this.product.productGroepId]);
  }

  ngOnInit() {
  }

}
