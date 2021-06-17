import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublisherResource } from '../resources/publisher.resource';
import { PublisherService } from '../services/publisher.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public id: number = 0;
  public publisherResource: PublisherResource = <PublisherResource>{};

  constructor(private route: ActivatedRoute, private publisherService: PublisherService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getDate();
  }

  getDate(){
    this.publisherService.Details(this.id).subscribe(((response: any) => {
      this.publisherResource = response;
    }));
  }

}
