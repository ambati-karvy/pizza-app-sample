import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_MODULE_IMPORTS } from './app.module.dependance';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PizzaSelectViwerComponent } from './components/pizza-select-viwer/pizza-select-viwer.component';
import { PizzaViwerMainComponent } from './main-pizza-viwer/pizza-viwer-main/pizza-viwer-main.component';
import { PizzaListComponent } from './components/pizza-list/pizza-list.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { PizzaSizeComponent } from './components/pizza-size/pizza-size.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PizzaSelectViwerComponent,
    PizzaViwerMainComponent,
    PizzaListComponent,
    CustomerDetailsComponent,
    PizzaSizeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    APP_MODULE_IMPORTS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
