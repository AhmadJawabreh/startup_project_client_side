import { PublisherService } from './../../publisher/services/publisher.service';
import { PublisherResource } from './../../publisher/resources/publisher.resource';
import { Config } from './../../config/config';
import { AuthorService } from '../../author/service/author.service';
import { BookResource } from './../resources/book.resource';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BookService } from './../services/book.service';
import { Component, OnInit } from '@angular/core';
import { NotificationManager } from 'src/app/shared/notifications.manager';
import { BookModel } from '../models/book.model';
import { Location } from '@angular/common'
import { AuthorResource } from '../resources/author.resource';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  private id: number = 0;
  public isAddMode: boolean = false;
  public bookModel: BookModel = <BookModel>{};
  public bookResource: BookResource = <BookResource>{};
  public bookForm: FormGroup = <FormGroup>{};
  public authors: Array<AuthorResource> = [];
  public publishers: Array<PublisherResource> = [];

  constructor(private bookService: BookService,
    private authorService: AuthorService,
    private publisherService: PublisherService,
    private notification: NotificationManager,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.isAddMode = this.id < 0 ? false : true;
    this.bookForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(35)]),
    });

    this.getAuthors();

    this.getPublishers();

    if (!this.isAddMode) {
      this.getDetails();
      this.bookForm.patchValue({
        name: this.bookResource.name,
      });
    }
  }

  createBook(): void {
    this.bookService.Create(this.bookModel).subscribe((reponse: any) => {
      this.notification.successMessage("A book created successfuly.");
      this.location.back();
    }, (error: any) => {
      this.notification.errorMessage("Failed to create a book.")
    });
  }

  updateBook(): void {
    this.bookService.Update(this.bookModel).subscribe((response: any) => {
      this.notification.successMessage("The book updated succefully.");
      this.location.back();
    }, (error: any) => {
      this.notification.errorMessage("Failed to update the book information.");
    });
  }

  getDetails(): void {
    this.bookService.Details(this.bookModel).subscribe((response: any) => {
      this.bookModel = response;
    }, (error: any) => {
      this.notification.errorMessage("Failed to fetch the book information.");
    });
  }

  getAuthors(): void {
    this.authorService.GetAll(Config.pagination).subscribe((response: any) => {
      this.authors = response;
    }, (error) => {
      this.notification.errorMessage("Failed to fetch All Authors.");
    });
  }

  getPublishers(): void {
    this.publisherService.GetAll(Config.pagination).subscribe((response: any) => {
      this.publishers = response;
    }, (error) => {
      this.notification.errorMessage("Failed to fetch All Publishers.");
    });
  }

  public publisherValue(value: any): void {
    this.bookModel.publisherId = value.id;
  }

  public publishValue(value: any): void {
    this.bookModel.releaseDate = value;
  }

  public authorsValues(value: any): void {
    this.bookModel.authorIds = [];
    value.forEach((element: any) => {
      this.bookModel.authorIds.push(element.id);
    });
  }

  submit(): void {
    if (this.bookForm.invalid)
      return;

    this.bookModel.name = this.bookForm.controls['name'].value;

    this.isAddMode ? this.createBook() : this.updateBook();
  }

}
