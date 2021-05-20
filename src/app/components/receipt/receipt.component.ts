import {Component, Input, OnInit} from '@angular/core';
import {Receipt} from "../../models/receipt";

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {
  @Input() receipt!: Receipt;

  constructor() { }

  ngOnInit(): void {
  }

}
