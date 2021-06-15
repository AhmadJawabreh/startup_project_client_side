import { PublisherService } from './../publisher.service';
import { Component, OnInit } from '@angular/core';
import { Publisher } from '../publisher.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  private pageSize = 15;
  private pageNumber = 1;
  public publishers : Array<Publisher> = [];
  constructor(private publisherService : PublisherService) { }

  ngOnInit(): void {
    this.publisherService.GetAll(this.pageSize,this.pageNumber).subscribe((reponse: any) =>{
      this.publishers = reponse;
     console.log(reponse);
    });
  }

}
