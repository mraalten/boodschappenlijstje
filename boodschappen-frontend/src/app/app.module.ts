import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LijstProduktgroepenComponent } from './lijst-produktgroepen/lijst-produktgroepen.component';
import { ProduktgroepenComponent } from './produktgroepen/produktgroepen.component';
import { LijstComponent } from './lijst/lijst.component';
import { RouterModule, Routes} from "@angular/router";
import { ServiceComponent } from './service/service.component';
import { HomepageComponent } from './homepage/homepage.component';

const appRoutes: Routes = [
    { path: '',
        component : HomepageComponent,
        pathMatch: 'full'
    },
    { path: 'produktgroepen',
        component : LijstProduktgroepenComponent,
        pathMatch: 'full'
    }
];

@NgModule({
  declarations: [
    AppComponent,
    LijstComponent,
    LijstProduktgroepenComponent,
    ProduktgroepenComponent,
    ServiceComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
