import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { PublisherRoutingModule } from './publisher.routing.module';
import { GridModule } from '@progress/kendo-angular-grid';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    IndexComponent,
    AddComponent,
    UpdateComponent,
    DetailsComponent
    ],
  imports: [
    CommonModule,
    GridModule,
    PublisherRoutingModule
  ]
})
export class PublisherModule { }
