import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreItemComponent } from './store-item/store-item.component';
import {FormsModule} from "@angular/forms";
import { ShoppingBasketsComponent } from './shopping-baskets/shopping-baskets.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreItemComponent,
    ShoppingBasketsComponent
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
