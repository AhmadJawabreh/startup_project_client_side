import { PublisherModule } from './publisher/publisher.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { PublisherService } from './publisher/publisher.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PublisherModule
  ],
  providers: [
    PublisherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
