import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  
  itemObj
  constructor(private miServicio: ItemsService, private route: ActivatedRoute) {
    let id = this.route.snapshot.paramMap.get('id');
    this.itemObj = miServicio.getItem(id);
  }

  ngOnInit(): void {}
}
