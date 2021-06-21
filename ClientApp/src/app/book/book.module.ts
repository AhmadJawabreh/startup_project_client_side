import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { DetailsComponent } from './details/details.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { BookRoutingModule } from './book.routing.module';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    IndexComponent,
    DetailsComponent,
    AddEditComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    ReactiveFormsModule,
    DialogModule
  ]
})
export class BookModule { }
