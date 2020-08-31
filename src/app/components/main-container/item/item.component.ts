import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input()
  itemObj;

  @Output() //para emitters
  autoKillEmit = new EventEmitter<any>();  //pregunta sobre https://desarrolloweb.com/articulos/generics-typescript.html



  constructor() {}

  ngOnInit(): void {}

  deleteItem() {
    this.autoKillEmit.emit(this.itemObj);
  }
}
