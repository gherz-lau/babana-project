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

  constructor() { }


  ngOnInit(): void { }

  addNewItem() {
    this.listItems.push({
      //id: this.listItems.length + 1, //cada que se genere un nuevo item/card, debe tomar como id el numero consecutivo
      id: 
        this.listItems.length > 0
          ? this.listItems[this.listItems.length - 1].id + 1
          : 1,
      image: '',
      title: '', //Fire for flowers
      description: '',
    });

  }

  killChild(item) {
    //const index = this.listItems.indexOf(item); //creas una variable llamada index, para guardar ahi el id del item que  se va a matar
    //this.listItems.splice(index, 1); //matas el item (orden splice), un solo item, con el index indicado (o sea el id)
    const index =this.listItems.findIndex (i => i.id == item.id);
    //array.indexOf busca primitivos en arrays
    //array.findIndex permite buscar el indice con base en el resultado de una funcion
    this.listItems.splice(index, 1);
  
  
  
  }
  

}
