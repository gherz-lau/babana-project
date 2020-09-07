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

  isEditing: boolean;

  constructor() { }

  ngOnInit(): void {
    if (this.itemObj.image) {
      this.isEditing = false;
    } else {
      this.isEditing = true;
    }
  }
  
  deleteItem() {
    this.autoKillEmit.emit(this.itemObj);
  }
  
  savedItem(formValue) {
    this.itemObj = formValue;
    this.isEditing = false;
  }
  
  
  cancelItem(formValue) {
    //if (!formValue.title && !formValue.description) {
      this.deleteItem();
  //  } else {
  //    this.isEditing = false;
  //  }
  }
 
 
  editItem() {
    this.isEditing = true;

  }
}
