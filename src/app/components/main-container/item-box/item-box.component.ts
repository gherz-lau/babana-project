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
<<<<<<< HEAD
    // {
    //   id: 2,
    //   image: '',
    //   title: '',
    //   description: '',
    // },
  ];
    // {
    //   id: 3,
    //   image: '/assets/leaf.jpg',
    //   title: 'Leaf',
    //   description: 'Volar/Flotar',
    // },
    // {
    //   id: 4,
    //   image: '/assets/mush.jpg',
    //   title: 'Red Mushroom',
    //   description: 'Aumenta estatura y fuerza',
    // },
 

 
  
 
  constructor() {}
=======
  ];

  imageOptions =[
    '/assets/bellota.jpg',
    '/assets/Dcherry.png',
    '/assets/leaf.jpg',
  ]
>>>>>>> 3482bad7bcc366bad599059e714f40c685171676

  //pipe
  title;
  description;
  imagen;

<<<<<<< HEAD
  addNewItem() {
    this.listItems.push({
      id: this.listItems.length + 1, //cada que se genere un nuevo item/card, debe tomar como id el numero consecutivo
      image: '', //'/assets/fireflower.jpg',
      title: '', //'Fire Flower', //Fire for flowers (esto es muy bonito n.n)
      description: '', //'Descripcion fancy',
    });
  
    
=======
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
>>>>>>> 3482bad7bcc366bad599059e714f40c685171676
  }

  killChild(item) {
    const index = this.listItems.indexOf(item); //creas una variable llamada index, para guardar ahi el id del item que  se va a matar
    this.listItems.splice(index, 1); //matas el item (orden splice), un solo item, con el index indicado (o sea el id)
  }
<<<<<<< HEAD



=======
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
>>>>>>> 3482bad7bcc366bad599059e714f40c685171676
}
