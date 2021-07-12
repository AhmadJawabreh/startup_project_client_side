import { publisherUpdatedFailed, publisherUpdatedSuccessfully } from './publisher.actions';
import { PublisherModel } from './../models/publisher.model';
import { PublisherResource } from './../resources/publisher.resource';
import { PublisherService } from './../services/publisher.service';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { StoreActions } from './actions.app';
import { Action } from '@ngrx/store';

@Injectable()
export class PublisherEffects {

  constructor(private actions: Actions, private publisherService: PublisherService) {
  }

  loadPublishers$ = createEffect(
    () =>
      this.actions.pipe(
        ofType(StoreActions.loadAllPublishers),
        mergeMap((action) =>
          this.publisherService.GetAll(action.payload.filter).pipe(
            map((publishers: PublisherResource[]) =>
              StoreActions.loadAllPublishersSuccess({ payload: { publishers: publishers } })
            ),
            catchError((error) =>
              of(StoreActions.loadAllPublisherFailed({ payload: { erroMessage: "can not loaded publishers data" } })))
          )
        )
      )
  );


  createPublisher$ = createEffect(
    () => this.actions.pipe(
      ofType(StoreActions.createPublisher),
      mergeMap((action) =>
        this.publisherService.Create(action.payload.publisherModel).pipe(
          map((publihser: PublisherResource) =>
            StoreActions.publisherCreatedSuccessfully({ payload: { publisherResource: publihser } }),
            catchError((error) =>
              of(StoreActions.publisherDeletedFailed({ payload: { erroMessage: "can not create a publisher" } })))
          )
        )
      )
    )
  );


  updatePublisher$: Observable<Action> = createEffect(
    () => this.actions.pipe(
      ofType(StoreActions.updatePublisher),
      mergeMap((action) =>
        this.publisherService.Update(action.payload.publisherModel).pipe(
          map((publisher: PublisherResource) =>
            StoreActions.publisherUpdatedSuccessfully({ payload: { publisherResource: publisher } }),
            catchError((error) =>
              of(StoreActions.publisherUpdatedFailed({ payload: { erroMessage: "Can not update the publisher" } })))
          )
        )
      )
    )
  );


  deletePublisher$: Observable<Action>  = createEffect(
    () =>
      this.actions.pipe(
        ofType(StoreActions.deletePublisher),
        mergeMap((action) => this.publisherService.Delete(action.payload.id).pipe(
          map((data) => StoreActions.publisherDeletedSuccessfully({ payload: { id: action.payload.id } }),
            catchError(async (error) => of(StoreActions.publisherDeletedFailed(
              { payload: { erroMessage: "can not delete this publisher." } }))))
        )
        )
      )
  );

}
