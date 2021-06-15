import { PublisherService } from './../publisher.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private publisherService : PublisherService) { }

  ngOnInit(): void {
    this.publisherService.Details(1).subscribe((Data: any) =>{
      console.log(Data);
    });
  }

}
