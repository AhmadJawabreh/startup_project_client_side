import { DetailsComponent } from './details/details.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { IndexComponent } from './index/index.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { publisherReducer } from './store/publisher.reducer';
import { PublisherEffects } from './store/publisher.effects';
import { reducers } from './store/app.state';
const routes : Routes = [
  { path: "publisher", component: IndexComponent },
  { path: "publisher/add", component: AddEditComponent },
  { path: "publisher/edit/:id", component: AddEditComponent },
  { path: "publisher/details/:id", component: DetailsComponent }
];

@NgModule({
 imports :[RouterModule.forChild(routes),
  StoreModule.forRoot(reducers),
  EffectsModule.forRoot([PublisherEffects]),
],
 exports: [RouterModule]
})

export class PublisherRoutingModule{}
