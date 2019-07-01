import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BoodschappenlijstComponent } from './boodschappenlijst/boodschappenlijst.component';
import { ProductgroepenComponent } from './productgroepen/productgroepen.component';
import { BoodschappenlijstKnoppenComponent } from './boodschappenlijst-knoppen/boodschappenlijst-knoppen.component';
import { BoodschappenlijstItemsComponent } from './boodschappenlijst-items/boodschappenlijst-items.component';
import { ProductgroepComponent } from './productgroep/productgroep.component';
import { BoodschappenlijstItemComponent } from './boodschappenlijst-item/boodschappenlijst-item.component';
import { ProductenComponent } from './producten/producten.component';
import { ProductComponent } from './product/product.component';
import { ProductKnoppenComponent } from './product-knoppen/product-knoppen.component';
import { ProductMuterenComponent } from './product-muteren/product-muteren.component';
import {BoodschappenlijstService} from "./services/boodschappenlijst.service";
import {ProductenService} from "./services/producten.service";
import {ProductGroepenService} from "./services/productgroepen.service";
import {HttpClientModule} from "@angular/common/http";
import {RestService} from "./services/rest-service";

const routes : Routes = [
    { path: '', component: ProductgroepenComponent},
    { path: 'products/:productGroepId', component: ProductenComponent},
    { path: 'editproduct/:productId', component: ProductMuterenComponent},
    { path: 'addproduct/:productGroepId', component: ProductMuterenComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoodschappenlijstComponent,
    ProductgroepenComponent,
    BoodschappenlijstKnoppenComponent,
    BoodschappenlijstItemsComponent,
    ProductgroepComponent,
    BoodschappenlijstItemComponent,
    ProductenComponent,
    ProductComponent,
    ProductKnoppenComponent,
    ProductMuterenComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
      BoodschappenlijstService,
      ProductGroepenService,
      ProductenService,
      RestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
