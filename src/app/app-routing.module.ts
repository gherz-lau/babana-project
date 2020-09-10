import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemBoxComponent } from './components/main-container/item-box/item-box.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [

  {
    path: '',
    component: ItemBoxComponent,
  },
  
  
  { path: 'details/:id', component: DetailsComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
