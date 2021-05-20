import {StoreItem} from "./store-item";

export interface Receipt {
  receiptItems: ReceiptItem[];
  totalCost: number;
  totalSalesTax: number;
}

export interface ReceiptItem {
  name: string;
  totalCost: number;
  quantity: number;
}
