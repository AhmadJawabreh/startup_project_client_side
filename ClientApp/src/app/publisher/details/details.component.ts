import { Publisher } from './../publisher.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublisherService } from '../publisher.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public id: number = 0;
  public publisher: any;
  constructor(private route: ActivatedRoute, private publisherService: PublisherService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params["id"];
    });
    this.getDate();
  }

  getDate(){
    this.publisherService.Details(this.id).subscribe(((response: any) => {
      this.publisher = response;
    }));
  }

}
