import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-box',
  templateUrl: './item-box.component.html',
  styleUrls: ['./item-box.component.scss'],
})
export class ItemBoxComponent implements OnInit {
  listItems = [
    {
      id: 1,
      image: '/assets/Turnip.jpg',
      title: 'Turnip',
      description: 'Arrojable',
    },
    {
      id: 2,
      image: '',
      title: '',
      description: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  addNewItem() {
    this.listItems.push({
      id: this.listItems.length + 1,
      image: '',
      title: '', //Fire for flowers
      description: '',
    });
  }
  killChiild(item) {
    const index = this.listItems.indexOf(item);
    this.listItems.splice(index, 1);
  }
}
