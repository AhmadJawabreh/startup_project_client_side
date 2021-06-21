import { Component, OnInit } from '@angular/core';
import { PublisherResource } from '../resources/publisher.resource';
import { PublisherService } from '../services/publisher.service';
import { Config } from 'src/app/config/config';
import { NotificationManager } from 'src/app/shared/notifications.manager';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {


  public publisherResources: Array<PublisherResource> = [];
  constructor(private publisherService: PublisherService, private notification: NotificationManager) { }


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
    this.publisherService.Delete(id).subscribe((reponse: any) => {
      this.getDate();
      this.notification.successMessage("The Publisher deleted successfully");
    }, (error) => {
      this.notification.errorMessage("cannot delete a publisher.");
    });
  }

}
