import { Filter } from './../../shared/filter';
import { PublisherModel } from './../models/publisher.model';
import { PublisherResource } from './../resources/publisher.resource';
import { createAction, props } from '@ngrx/store';


// Load all entites.
export const loadAllPublishers = createAction(
  "[Publisher Component][Action][Load][Publishers]",
  props<{ payload: { filter: Filter } }>()
);

export const loadAllPublishersSuccess = createAction(
  "[Publisher Component][Effect][Load][Success]",
  props<{ payload: { publishers: PublisherResource[] } }>()
);

export const loadAllPublisherFailed = createAction(
  "[Publisher Component][Effect][Load][Failed]",
  props<{ payload: { erroMessage: string } }>()
);

// Create an entity.
export const createPublisher = createAction(
  "[Publisher Module][Action][Create]",
  props<{ payload: { publisherModel: PublisherModel } }>()
);

export const publisherCreatedSuccessfully = createAction(
  "[Publisher Module][Effect][Create][Success]",
  props<{ payload: { publisherResource: PublisherResource } }>()
);

export const publisherCreatedFailed = createAction(
  "[Publisher Module][Effect][Create][Failed]",
  props<{ payload: { erroMessage: string } }>()
);

// Update an entity
export const updatePublisher = createAction(
  "[Publisher Module][Action][Update]",
  props<{ payload: { publisherModel: PublisherModel } }>()
);

export const publisherUpdatedSuccessfully = createAction(
  "[Publisher Module][Effect][Update][Success]",
  props<{ payload: { publisherResource: PublisherResource } }>()
);

export const publisherUpdatedFailed = createAction(
  "[Publisher Module][Effect][Update][failed]",
  props<{ payload: { erroMessage: string } }>()
);

// Delete an entity
export const deletePublisher = createAction(
  "[Publisher Component][Action][Delete]",
  props<{ payload: { id: number } }>()
);

export const publisherDeletedSuccessfully = createAction(
  "[Publisher Component][Effect][Delete][Success]",
  props<{ payload: { id: number } }>()
);

export const publisherDeletedFailed = createAction(
  "[Publisher Component][Effect][Delete][Failed]",
  props<{ payload: { erroMessage: string } }>()
);
