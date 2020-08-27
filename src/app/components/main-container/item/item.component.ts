import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input()
  itemObj;

  @Output() //emiters
  autoKillEmit = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}
  deleteItem() {
    this.autoKillEmit.emit(this.itemObj);
  }
}
