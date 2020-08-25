import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-box',
  templateUrl: './item-box.component.html',
  styleUrls: ['./item-box.component.scss'],
})
export class ItemBoxComponent implements OnInit {
  listItems = [
    {
      image: '/assets/Turnip.jpg',
      title: 'Turnip',
      description: 'Arrojable',
    },
    {
      image: '/assets/star.jpg',
      title: 'Star',
      description: 'Invulnerabilidad momentánea',
    },
    {
      image: '/assets/leaf.jpg',
      title: 'Leaf',
      description: 'Volar/Flotar',
    },
    {
      image: '/assets/mush.jpg',
      title: 'Red Mushroom',
      description: 'Aumenta estatura y fuerza',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  addNewItem() {
    this.listItems.push({
      image: '/assets/fireflower.jpg',
      title: 'Fire Flower', //Fire for flowers
      description: 'Descripcion fancy',
    });
  }
}
