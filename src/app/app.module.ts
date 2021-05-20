import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreItemComponent } from './components/store-item/store-item.component';
import {FormsModule} from "@angular/forms";
import { ShoppingBasketsComponent } from './components/shopping-baskets/shopping-baskets.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ReceiptComponent } from './components/receipt/receipt.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreItemComponent,
    ShoppingBasketsComponent,
    CheckoutComponent,
    ReceiptComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
