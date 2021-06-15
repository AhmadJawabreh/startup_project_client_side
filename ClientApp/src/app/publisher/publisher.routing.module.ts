import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { IndexComponent } from './index/index.component';

const routes : Routes = [
  { path: "publisher", component: IndexComponent }
];

@NgModule({
 imports :[RouterModule.forChild(routes)],
 exports: [RouterModule]
})

export class PublisherRoutingModule{}
