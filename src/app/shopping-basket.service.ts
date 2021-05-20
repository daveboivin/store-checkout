import { Injectable } from '@angular/core';
import {ShoppingBasket} from "./shopping-basket";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingBasketService {

   shoppingBasket1: ShoppingBasket = {
    storeItems: [
      {name: "16lb bag of Skittles", price: 16.00, quantity: 1, isBasicSalesTaxExempt: true, isImported: false},
      {name: "Walkman", price: 99.99, quantity: 1, isBasicSalesTaxExempt: false, isImported: false},
      {name: "bag of microwave Popcorn", price: 0.99, quantity: 1, isBasicSalesTaxExempt: true, isImported: false},
    ]
  };

  shoppingBasket2: ShoppingBasket = {
    storeItems: [
      {name: "bag of Vanilla-Hazelnut Coffee", price: 11.00, quantity: 1, isBasicSalesTaxExempt: true, isImported: true},
      {name: "Vespa", price: 15001.25, quantity: 1, isBasicSalesTaxExempt: false, isImported: true},
    ]
  };

  shoppingBasket3: ShoppingBasket = {
    storeItems: [
      {name: "crate of Almond Snickers", price: 75.99, quantity: 1, isBasicSalesTaxExempt: true, isImported: true},
      {name: "Discman", price: 55.00, quantity: 1, isBasicSalesTaxExempt: false, isImported: false},
      {name: "Bottle of Wine", price: 10.00, quantity: 1, isBasicSalesTaxExempt: false, isImported: true},
      {name: "300# bag of Fair-Trade Coffee", price: 997.99, quantity: 1, isBasicSalesTaxExempt: true, isImported: false},
    ]
  };

  shoppingBaskets: ShoppingBasket[] = [
    this.shoppingBasket1,
    this.shoppingBasket2,
    this.shoppingBasket3
  ]

  constructor() { }

  getShoppingBaskets(): Observable<ShoppingBasket[]> {

    // replace with API Call

    return new Observable<ShoppingBasket[]>(observer => {
      observer.next(this.shoppingBaskets);
      observer.complete();
    });
  }
}
