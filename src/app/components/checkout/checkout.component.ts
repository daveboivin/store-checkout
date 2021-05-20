import { Component, OnInit } from '@angular/core';
import {Receipt} from "../../models/receipt";
import {ShoppingBasket} from "../../models/shopping-basket";
import {ShoppingBasketService} from "../../services/shopping-basket.service";
import {CheckoutService} from "../../services/checkout.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  shoppingBaskets: ShoppingBasket[] = [];
  receipts: Receipt[] = [];
  checkoutComplete: boolean = false;

  constructor(private shoppingBasketService: ShoppingBasketService,
              private checkoutService: CheckoutService) { }

  ngOnInit(): void {
    this.shoppingBasketService.getShoppingBaskets()
      .subscribe(shoppingBaskets => this.shoppingBaskets = shoppingBaskets);
  }

  checkout(): void {

    if (!this.checkoutComplete) {
      this.shoppingBaskets.forEach((shoppingBasket) => {
        this.receipts.push(this.checkoutService.calculateReceipt(shoppingBasket));
      });

      this.checkoutComplete = true;
    }
  }

}
