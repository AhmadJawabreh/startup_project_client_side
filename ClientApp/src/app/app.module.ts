import { BookModule } from './book/book.module';
import { PublisherModule } from './publisher/publisher.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogModule } from "@progress/kendo-angular-dialog";

import { HttpClientModule } from '@angular/common/http';
import { PublisherService } from './publisher/services/publisher.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { StoreModule } from '@ngrx/store';
import { reducers } from './publisher/store/app.state';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { PublisherEffects } from './publisher/store/publisher.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PublisherModule,
    BookModule,
    MatDialogModule,
    GridModule,
    BrowserAnimationsModule,
    DialogModule,
    NotificationModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([PublisherEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [
    PublisherService,
    GridModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
