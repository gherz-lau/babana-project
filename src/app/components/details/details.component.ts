import { Component, OnInit, Input } from '@angular/core';

//nuevos para los servicios

import { ItemsService } from 'src/app/services/items.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})



export class DetailsComponent implements OnInit {
 @Input() //esto es un decorador que indica que recibe un parametro

  itemObj

  constructor(private miServicio: ItemsService, private route: ActivatedRoute) {

   // let id = this.route.snapshot.paramMap.get('id');
   // this.itemObj = miServicio.getItem(id);


  }

  ngOnInit(): void {  }

  skip() {

    this.miServicio.selectedItem = null;
    
  }





}