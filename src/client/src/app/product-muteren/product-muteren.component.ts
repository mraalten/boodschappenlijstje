import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductenService} from "../services/producten.service";
import {Product} from "../product";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Eenheid} from "../eenheid";
import {BoodschappenlijstService} from "../services/boodschappenlijst.service";

@Component({
  selector: 'product-muteren',
  templateUrl: './product-muteren.component.html',
  styleUrls: ['./product-muteren.component.css']
})
export class ProductMuterenComponent implements OnInit {
  selectedProductId: number;
  selectedProductGroepId: number;
  product: Product;
  editForm: FormGroup;
  eenheden: Eenheid[];
  imageAvailable: boolean;

  constructor(
      private route: ActivatedRoute,
      private productenService: ProductenService,
      private boodschappenLijstService: BoodschappenlijstService,
      private router: Router,
      formBuilder: FormBuilder

  ) {
      route.params.subscribe(params => {this.selectedProductId = Number(params['productId'])});
      route.params.subscribe(params => {this.selectedProductGroepId = Number(params['productGroepId'])});
      this.eenheden = this.productenService.getEenheden();
      if (this.selectedProductId) {
          this.product = productenService.getProduct(this.selectedProductId);
          this.imageAvailable = this.product.imageNaam != 'geen_afbeelding.jpg';
          let imageType = this.imageAvailable ? 'own' : 'NA';
          this.editForm = formBuilder.group({
              'productName' : [this.product.naam, Validators.required],
              'newEenheid'  : [this.product.eenheid.displayValue, Validators.required],
              'imageName'  : [this.product.imageNaam, Validators.required],
              'imageType'  : new FormControl(imageType)
          });
      } else {
          this.imageAvailable = false;
          let imageType = 'NA';
          this.editForm = formBuilder.group({
              'productName' : ["", Validators.required],
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
        let newEenheid = this.productenService.toEenheid(this.editForm.get("newEenheid").value);
        if (this.selectedProductId) {
            // edit product
            this.productenService.editProduct(this.selectedProductId, newProductName, newEenheid);
        } else {
            // add product
            this.product = this.productenService.addNewProduct(this.selectedProductGroepId, newProductName, newEenheid);
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
