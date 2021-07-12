import { PublisherResource } from './../resources/publisher.resource';
import { getPublisher } from './../store/publisher.selector';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { StoreActions } from '../store/actions.app';
import { AppState } from '../store/app.state';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public id: number = 0;
  public publisherResource: PublisherResource = <PublisherResource>{};

  constructor(private route: ActivatedRoute, private appStore: Store<AppState>) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getPublisherDetails();
  }

  getPublisherDetails() {
    this.appStore.select(getPublisher(this.id)).subscribe((data) => this.publisherResource = data as PublisherResource)
  }

}
