import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { DetailsComponent } from './details/details.component';
import { AddEditComponent } from './add-edit/add-edit.component';



@NgModule({
  declarations: [
    IndexComponent,
    DetailsComponent,
    AddEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BookModule { }
