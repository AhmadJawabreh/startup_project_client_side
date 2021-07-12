import { PublisherResource } from '../resources/publisher.resource';
import { EntityState } from "@ngrx/entity";
import { ActionReducerMap  } from '@ngrx/store';
import { publisherReducer } from './publisher.reducer';

export interface AppState {
  publishersState: EntityState<PublisherResource>
}


export const reducers: ActionReducerMap<AppState> = {
  publishersState: publisherReducer
};


