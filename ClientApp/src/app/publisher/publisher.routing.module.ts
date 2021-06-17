import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { IndexComponent } from './index/index.component';
import { AddComponent } from './add/add.component';

const routes : Routes = [
  { path: "publisher", component: IndexComponent },
  { path: "publisher/add", component: AddComponent },
  { path: "publisher/edit/:id", component: EditComponent },
  { path: "publisher/details/:id", component: DetailsComponent }
];

@NgModule({
 imports :[RouterModule.forChild(routes)],
 exports: [RouterModule]
})

export class PublisherRoutingModule{}
