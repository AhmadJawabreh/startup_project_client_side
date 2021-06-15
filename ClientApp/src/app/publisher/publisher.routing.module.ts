import { DetailsComponent } from './details/details.component';
import { UpdateComponent } from './update/update.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { IndexComponent } from './index/index.component';
import { AddComponent } from './add/add.component';

const routes : Routes = [
  { path: "publisher", component: IndexComponent },
  { path: "publisher/add", component: AddComponent },
  { path: "publisher/update/:id", component: UpdateComponent },
  { path: "publisher/details/:id", component: DetailsComponent }
];

@NgModule({
 imports :[RouterModule.forChild(routes)],
 exports: [RouterModule]
})

export class PublisherRoutingModule{}
