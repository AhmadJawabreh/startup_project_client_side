import { PublisherResource } from './../resources/publisher.resource';
import { createReducer, on } from '@ngrx/store';
import { StoreActions } from './actions.app';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

// Create a state of your eneity that want you to returen.
export interface publisherState extends EntityState<PublisherResource> {
  publishers: PublisherResource[];
}


// Create an entity adapter to manage all entity state collection.
export const adapter: EntityAdapter<PublisherResource> = createEntityAdapter<PublisherResource>();

// Create an intital state from adapter.
export const initialPublisherState = adapter.getInitialState();

export const publisherReducer = createReducer(
  initialPublisherState,
  on(
    StoreActions.loadAllPublishersSuccess,
    (state, action) => adapter.addMany(action.payload.publishers, state)
  ),
  on(
    StoreActions.publisherDeletedSuccessfully,
    (state, action) => adapter.removeOne(action.payload.id, state)
  ),
  on(
    StoreActions.publisherCreatedSuccessfully,
    (state, action) => adapter.addOne(action.payload.publisherResource, state)
  ),
  on(
    StoreActions.publisherUpdatedSuccessfully,
    (state, action) => adapter.updateOne({
      id: action.payload.publisherResource.id,
      changes: action.payload.publisherResource
    }, state)
  ),
  on(
    StoreActions.publisherLoadedSuccessFully,
    (state, action) => adapter.upsertOne(action.payload.publisherResource, state)
  )
);
