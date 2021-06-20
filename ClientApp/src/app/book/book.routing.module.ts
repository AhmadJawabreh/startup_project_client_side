import { AddEditComponent } from './add-edit/add-edit.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { IndexComponent } from './index/index.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: "book/index", component: IndexComponent },
  { path: "book/details/:id", component: DetailsComponent },
  { path: "book/add", component: AddEditComponent },
  { path: "book/edit/:id", component: AddEditComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BookRoutingModule { }
