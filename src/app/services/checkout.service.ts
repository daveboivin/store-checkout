import { Injectable } from '@angular/core';
import {Receipt, ReceiptItem} from "../models/receipt";
import {ShoppingBasket} from "../models/shopping-basket";

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  BASIC_SALES_TAX: number = .1;
  IMPORT_SALES_TAX: number = .05;

  constructor() { }

  calculateReceipt(shoppingBasket: ShoppingBasket): Receipt {
    let receipt: Receipt = {
      receiptItems: [],
      totalCost: 0,
      totalSalesTax: 0
    };

    shoppingBasket.storeItems.forEach((storeItem) => {
      // let itemCostBeforeTax = (storeItem.price * storeItem.quantity);
      let itemSalesTax = 0;

      if (!storeItem.isBasicSalesTaxExempt) {
        itemSalesTax += (this.getBasicSalesTax(storeItem.price) * storeItem.quantity);
      }

      if (storeItem.isImported) {
        itemSalesTax += (this.getImportSalesTax(storeItem.price) * storeItem.quantity);
      }

      let receiptItem : ReceiptItem = {
        name: storeItem.name,
        totalCost: this.roundTotal((storeItem.price * storeItem.quantity) + itemSalesTax),
        quantity: storeItem.quantity
      }

      receipt.receiptItems.push(receiptItem);

      receipt.totalSalesTax += itemSalesTax;
      receipt.totalCost += receiptItem.totalCost;
    });

    receipt.totalSalesTax = this.roundSalesTax(receipt.totalSalesTax);
    receipt.totalCost = this.roundTotal(receipt.totalCost);

    return receipt;
  }

  getBasicSalesTax(itemAmount: number): number {
    let salesTax = itemAmount * this.BASIC_SALES_TAX;
    return this.roundSalesTax(salesTax);
  }

  getImportSalesTax(itemAmount: number): number {
    let salesTax = itemAmount * this.IMPORT_SALES_TAX;
    return this.roundSalesTax(salesTax);
  }

  // return number rounded to nearest multiple of $0.05
  roundSalesTax(number: number): number {
    // return Math.round(number * 100) / 100;

    return Math.ceil(number*20)/20;
  }

  roundTotal(number: number): number {
    return Math.round(number * 100) / 100;
  }
}
