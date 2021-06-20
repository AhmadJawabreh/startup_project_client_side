import { Component, OnInit } from '@angular/core';
import { PublisherResource } from '../resources/publisher.resource';
import { PublisherService } from '../services/publisher.service';
import { Config } from 'src/app/config/config';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {


  public publisherResources: Array<PublisherResource> = [];
  constructor(private publisherService: PublisherService) { }


  ngOnInit(): void {
    this.getDate();
  }

  getDate() {
    this.publisherService.GetAll(Config.pagination).subscribe((reponse: any) => {
      this.publisherResources = reponse;
      console.log(reponse);
    });
  }

  Delete(id: number) {
    console.log(id);
    this.publisherService.Delete(id).subscribe((reponse: any) => {
      this.getDate();
    });
  }

}
