import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { PublisherRoutingModule } from './publisher.routing.module';
import { GridModule } from '@progress/kendo-angular-grid';



@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    GridModule,
    PublisherRoutingModule
  ]
})
export class PublisherModule { }
