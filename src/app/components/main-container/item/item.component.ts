import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})


export class ItemComponent implements OnInit {

  @Input()
  itemObj; //{id, title, description}

  @Output() //emiters
  autoKillEmit = new EventEmitter<any>();

  isEditing: boolean;

<<<<<<< HEAD
  constructor(private miServicio: ItemsService) { }
=======
  constructor(private miServicio: ItemsService) {}
>>>>>>> 97a9eae339ad03f11aee157f9010fab949118d3d

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
    //this.itemObj = formValue;
<<<<<<< HEAD
=======

>>>>>>> 97a9eae339ad03f11aee157f9010fab949118d3d
    this.miServicio.setItem(formValue);
    this.isEditing = false;
  }

<<<<<<< HEAD

=======
>>>>>>> 97a9eae339ad03f11aee157f9010fab949118d3d
  cancelItem(formValue) {
    //if (!formValue.title && !formValue.description) {
    this.deleteItem();
    //  } else {
    //    this.isEditing = false;
    //  }
  }

<<<<<<< HEAD

=======
>>>>>>> 97a9eae339ad03f11aee157f9010fab949118d3d
  editItem() {
    this.isEditing = true;
  }


  viewDetails(){

    this.miServicio.selectedItem = this.itemObj;

  }




}
