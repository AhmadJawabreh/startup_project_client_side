import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { DetailsComponent } from './details/details.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { BookRoutingModule } from './book.routing.module';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';



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
    DialogModule,
    DateInputsModule,
    InputsModule,
    DropDownsModule,
    FormsModule

  ]
})
export class BookModule { }
