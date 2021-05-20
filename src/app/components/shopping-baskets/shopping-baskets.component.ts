import { Component, OnInit } from '@angular/core';
import {ShoppingBasket} from "../../models/shopping-basket";
import {ShoppingBasketService} from "../../services/shopping-basket.service";

@Component({
  selector: 'app-shopping-baskets',
  templateUrl: './shopping-baskets.component.html',
  styleUrls: ['./shopping-baskets.component.css']
})
export class ShoppingBasketsComponent implements OnInit {
  shoppingBaskets: ShoppingBasket[] = [];

  constructor(private shoppingBasketService: ShoppingBasketService) { }

  ngOnInit(): void {
    this.shoppingBasketService.getShoppingBaskets()
      .subscribe(shoppingBaskets => this.shoppingBaskets = shoppingBaskets);
  }
}
