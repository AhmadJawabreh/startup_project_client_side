import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { PublisherRoutingModule } from './publisher.routing.module';



@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    PublisherRoutingModule
  ]
})
export class PublisherModule { }
