import {Component, Input, OnInit} from '@angular/core';
import {StoreItem} from "../store-item";

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.css']
})
export class StoreItemComponent implements OnInit {
  @Input() storeItem!: StoreItem;

  constructor() { }

  ngOnInit(): void {
  }

}
