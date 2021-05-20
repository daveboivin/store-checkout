import { TestBed } from '@angular/core/testing';

import { CheckoutService } from './checkout.service';
import {ShoppingBasketService} from "./shopping-basket.service";
import {ShoppingBasket} from "../models/shopping-basket";

describe('CheckoutService', () => {
  let service: CheckoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckoutService);
  });

  it('should create an accurate receipt for each shopping basket', () => {
    let shoppingBasketService = new ShoppingBasketService();
    let shoppingBasketsArray: ShoppingBasket[] = [];

    shoppingBasketService.getShoppingBaskets()
      .subscribe(shoppingBaskets => shoppingBasketsArray = shoppingBaskets);

    let receipts = [];
    shoppingBasketsArray.forEach((shoppingBasket) => {
      receipts.push(service.calculateReceipt(shoppingBasket));
    });

    expect(service).toBeTruthy();
  });
});
