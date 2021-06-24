import { NotificationManager } from 'src/app/shared/notifications.manager';
import { BookResource } from './../resources/book.resource';
import { ActivatedRoute } from '@angular/router';
import { BookService } from './../services/book.service';
import { BookModel } from './../models/book.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  private id: number = 0;
  public bookResource: BookResource = <BookResource>{};
  constructor(private bookService: BookService, private route: ActivatedRoute, private notification:NotificationManager) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getDetails();
  }

  getDetails(){
    this.bookService.getExtraBookDetails(this.id).subscribe((response: any) => {
      this.bookResource = response;
      console.log(this.bookResource);
    }, (error: any) => {
      this.notification.errorMessage("Failed to fetch book details.")
    } );
  }

}
