import { Component, OnInit } from '@angular/core';
import { Config } from 'src/app/config/config';
import { Store } from '@ngrx/store';
import { StoreActions } from '../store/actions.app';
import { AppState } from '../store/app.state';
import { getPublishers } from '../store/publisher.selector';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public openDialog = false;
  public publisherResources: Array<any> = [];
  constructor(private store: Store<AppState>) { }


  ngOnInit(): void {
    this.getAllPublishers();
  }

  getAllPublishers(): void {
    this.store.dispatch(StoreActions.loadAllPublishers({ payload: { filter: Config.filter } }));
    this.store.select(getPublishers).subscribe(data => this.publisherResources = data);
  }

  delete(id: number) {
    this.close();
    this.store.dispatch(StoreActions.deletePublisher({ payload: { id: id } }));
  }

  public close() {
    this.openDialog = false;
  }

  public open() {
    this.openDialog = true;
  }
}
