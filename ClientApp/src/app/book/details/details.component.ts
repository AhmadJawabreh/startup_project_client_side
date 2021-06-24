import { BookResource } from './../resources/book.resource';
import { ActivatedRoute } from '@angular/router';
import { BookService } from './../services/book.service';
import { Component, OnInit } from '@angular/core';
import { NotificationManager } from 'src/app/shared/notification.manager';
import { BookFilter } from '../models/book.filter';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  private id: number = 0;
  public bookResource: BookResource = <BookResource>{};
  public bookFilter: BookFilter =  <BookFilter> {};
  constructor(private bookService: BookService, private route: ActivatedRoute, private notification:NotificationManager) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getDetails();
  }

  getDetails(){
    this.bookFilter.authors = true;
    this.bookFilter.publihser = true;
    this.bookService.getExtraBookDetails(this.bookFilter,this.id).subscribe((response: any) => {
      this.bookResource = response;
    }, (error: any) => {
      this.notification.errorMessage("Failed to fetch book data.")
    } );
  }

}
