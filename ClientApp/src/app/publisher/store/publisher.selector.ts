import { AppState } from './app.state';
import { createSelector } from '@ngrx/store';


// Note: We should put all things that need to display for users.
export const getPublishers = createSelector(
  (appState: AppState) => appState.publishersState,
  (FeatureState) =>  Object.values(FeatureState.entities)
);


export const getPublisher = (publisherId: number) => createSelector(
  (appState: AppState) => appState.publishersState,
  (featureState) => featureState.entities[publisherId]
);
