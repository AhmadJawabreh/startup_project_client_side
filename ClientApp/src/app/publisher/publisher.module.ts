import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { PublisherRoutingModule } from './publisher.routing.module';
import { GridModule } from '@progress/kendo-angular-grid';
import { DetailsComponent } from './details/details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from "@progress/kendo-angular-dialog";
import { AddEditComponent } from './add-edit/add-edit.component';



@NgModule({
  declarations: [
    IndexComponent,
    DetailsComponent,
    AddEditComponent,

    ],
  imports: [
    CommonModule,
    GridModule,
    PublisherRoutingModule,
    ReactiveFormsModule,
    DialogModule
  ]
})
export class PublisherModule { }
