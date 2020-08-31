import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-item-box',
  templateUrl: './item-box.component.html',
  styleUrls: ['./item-box.component.scss'],
})
export class ItemBoxComponent implements OnInit {
  listItems = [
    {
      id: 1, //hay que asignarles un ID, para saber quien es el que se quiere suicidar
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
      id: this.listItems.length + 1, //cada que se genere un nuevo item/card, debe tomar como id el numero consecutivo
      image: '/assets/fireflower.jpg',
      title: 'Fire Flower', //Fire for flowers (esto es muy bonito n.n)
      description: 'Descripcion fancy',
    });
  }

  killChild(item) {
    const index = this.listItems.indexOf(item); //creas una variable llamada index, para guardar ahi el id del item que  se va a matar
    this.listItems.splice(index, 1); //matas el item (orden splice), un solo item, con el index indicado (o sea el id)
  }

}
