import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { BoodschappenlijstProductenComponent } from './boodschappenlijst-producten/boodschappenlijst-producten.component';
import { ProductenComponent } from './producten/producten.component';
import { ProductComponent } from './product/product.component';
import { BoodschappenlijstProductgroepenComponent } from './boodschappenlijst-productgroepen/boodschappenlijst-productgroepen.component';
import { ProductKnoppenComponent } from './product-knoppen/product-knoppen.component';

const routes : Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: BoodschappenlijstProductgroepenComponent},
    { path: 'products', component: BoodschappenlijstProductenComponent}
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
    BoodschappenlijstProductenComponent,
    ProductenComponent,
    ProductComponent,
    BoodschappenlijstProductgroepenComponent,
    ProductKnoppenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
