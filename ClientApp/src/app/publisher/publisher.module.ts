import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { PublisherRoutingModule } from './publisher.routing.module';
import { GridModule } from '@progress/kendo-angular-grid';
import { AddComponent } from './add/add.component';
import { DetailsComponent } from './details/details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from "@progress/kendo-angular-dialog";
import { EditComponent } from './edit/edit.component';



@NgModule({
  declarations: [
    IndexComponent,
    AddComponent,
    DetailsComponent,
    EditComponent,

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
