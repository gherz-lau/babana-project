import { Component, OnInit } from '@angular/core';

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
  ];

  imageOptions =[
    '/assets/bellota.jpg',
    '/assets/Dcherry.png',
    '/assets/leaf.jpg',
  ]

  //pipe
  title;
  description;
  imagen;

  constructor() {}
  

  ngOnInit(): void {}

  addNewItem() {
    this.listItems.push({
      id: this.listItems.length + 1, //cada que se genere un nuevo item/card, debe tomar como id el numero consecutivo
      image: this.imagen,
      title: this.title, //Fire for flowers (esto es muy bonito n.n)
      description: this.description,
    });
    this.title = null;
    this.description = null;
  }

  killChild(item) {
    const index = this.listItems.indexOf(item); //creas una variable llamada index, para guardar ahi el id del item que  se va a matar
    this.listItems.splice(index, 1); //matas el item (orden splice), un solo item, con el index indicado (o sea el id)
  }
  selectImage(img){
    this.imagen = img;
  }
  addCardPlaceholder(){
    this.listItems.push({
      id: this.listItems.length + 1, //cada que se genere un nuevo item/card, debe tomar como id el numero consecutivo
      image: '',
      title: '', //Fire for flowers (esto es muy bonito n.n)
      description: '',
    });
  }
}
