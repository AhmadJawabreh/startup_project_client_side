import { BookModel } from './../models/book.model';
import { BookService } from './../services/book.service';
import { Component, OnInit } from '@angular/core';
import { Config } from 'src/app/config/config';
import { NotificationManager } from 'src/app/shared/notifications.manager';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {


  public openDialog = false;
  public books: Array<BookModel> = [];
  constructor(private bookService: BookService, private notification: NotificationManager) { }

  ngOnInit(): void {
    this.getAll();
  }

  public close() {
    this.openDialog = false;
  }

  public open() {
    this.openDialog = true;
  }


  getAll() {
    this.bookService.GetAll(Config.pagination).subscribe((response: any) => {
      this.books = response;
      console.log(this.books);
    });
  }

  delete(id: number) {
    this.close();
    this.bookService.Delete(id).subscribe((response: any) => {
      this.getAll();
      this.notification.successMessage("The book deleted successfully.");
    }, (error) => {
      this.notification.errorMessage("Error cannot delete the book.");
    });
  }

}
