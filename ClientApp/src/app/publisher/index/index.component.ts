import { Component, OnInit } from '@angular/core';
import { PublisherResource } from '../resources/publisher.resource';
import { PublisherService } from '../services/publisher.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  private pageSize = 15;
  private pageNumber = 1;
  public publisherResources : Array<PublisherResource> = [];
  constructor(private publisherService : PublisherService) { }


  ngOnInit(): void {

   this.getDate(this.pageSize,this.pageNumber);
  }

  getDate(pageSize: number,pageNumber: number){
    this.publisherService.GetAll(pageSize,pageNumber).subscribe((reponse: any) =>{
      this.publisherResources = reponse;
     console.log(reponse);
    });
  }



  Delete(id: number){
    console.log(id);
    this.publisherService.Delete(id).subscribe((reponse: any) => {
      this.getDate(this.pageSize,this.pageNumber);

    });
  }

}
