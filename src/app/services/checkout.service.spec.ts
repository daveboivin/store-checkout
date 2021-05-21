import { TestBed } from '@angular/core/testing';

import { CheckoutService } from './checkout.service';
import {ShoppingBasketService} from "./shopping-basket.service";
import {ShoppingBasket} from "../models/shopping-basket";
import {Receipt} from "../models/receipt";

describe('CheckoutService', () => {
  let service: CheckoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckoutService);
  });

  it('getBasicSalesTax() should calculate accurate basic sales tax at 10%', () => {
    const price1 = 15001.25;
    const expectedSalesTax = 1500.15;

    const value = service.getBasicSalesTax(price1);

    expect(value).toBe(expectedSalesTax);
  });

  it('getBasicSalesTax() should calculate accurate import sales tax at 5%', () => {
    const price1 = 466.76;
    const expectedSalesTax = 23.35;

    const value = service.getImportSalesTax(price1);

    expect(value).toBe(expectedSalesTax);
  });

  it('roundSalesTax() should round sales tax to nearest multiple of .05', () => {
    expect(service.roundSalesTax(1.05)).toBe(1.05);
    expect(service.roundSalesTax(1.06)).toBe(1.1);
    expect(service.roundSalesTax(1.065)).toBe(1.1);
    expect(service.roundSalesTax(1.549)).toBe(1.55);
  });

  it('calculateReceipt() should calculate a receipt with accuracy', () => {
    let shoppingBasketService = new ShoppingBasketService();
    let shoppingBasketsArray: ShoppingBasket[] = [];
    let receipts: Receipt[] = [];

    let expectedReceipt: Receipt = {
      receiptItems: [{
        name: '16lb bag of Skittles',
        totalCost: 16,
        quantity: 1
      }, {name: 'Walkman', totalCost: 109.99, quantity: 1}, {
        name: 'bag of microwave Popcorn',
        totalCost: 0.99,
        quantity: 1
      }], totalCost: 126.98, totalSalesTax: 10
    }

    shoppingBasketService.getShoppingBaskets()
      .subscribe(shoppingBaskets => shoppingBasketsArray = shoppingBaskets);

    shoppingBasketsArray.forEach((shoppingBasket) => {
      receipts.push(service.calculateReceipt(shoppingBasket));
    });

    expect(receipts[0]).toEqual(expectedReceipt);
  });
});
