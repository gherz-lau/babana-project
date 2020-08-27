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
      image: '/assets/star.jpg',
      title: 'Star',
      description: 'Invulnerabilidad momentánea',
    },
    {
      id: 3,
      image: '/assets/leaf.jpg',
      title: 'Leaf',
      description: 'Volar/Flotar',
    },
    {
      id: 4,
      image: '/assets/mush.jpg',
      title: 'Red Mushroom',
      description: 'Aumenta estatura y fuerza',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  addNewItem() {
    this.listItems.push({
      id: this.listItems.length + 1,
      image: '/assets/fireflower.jpg',
      title: 'Fire Flower', //Fire for flowers
      description: 'Descripcion fancy',
    });
  }
  killChiild(item) {
    const index = this.listItems.indexOf(item);
    this.listItems.splice(index, 1);
  }
}
