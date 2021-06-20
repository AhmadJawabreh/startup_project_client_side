import { DetailsComponent } from './details/details.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { IndexComponent } from './index/index.component';
import { AddEditComponent } from './add-edit/add-edit.component';

const routes : Routes = [
  { path: "publisher", component: IndexComponent },
  { path: "publisher/add", component: AddEditComponent },
  { path: "publisher/edit/:id", component: AddEditComponent },
  { path: "publisher/details/:id", component: DetailsComponent }
];

@NgModule({
 imports :[RouterModule.forChild(routes)],
 exports: [RouterModule]
})

export class PublisherRoutingModule{}
