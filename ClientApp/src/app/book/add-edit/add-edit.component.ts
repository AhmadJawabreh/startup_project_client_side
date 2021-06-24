import { PublisherService } from './../../publisher/services/publisher.service';
import { PublisherResource } from './../../publisher/resources/publisher.resource';
import { Config } from './../../config/config';
import { AuthorService } from '../../author/service/author.service';
import { BookResource } from './../resources/book.resource';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BookService } from './../services/book.service';
import { Component, Injectable, OnInit } from '@angular/core';
import { NotificationManager } from 'src/app/shared/notification.manager';
import { BookModel } from '../models/book.model';
import { Location, DatePipe } from '@angular/common';
import { AuthorResource } from 'src/app/author/resource/author.resource';
import { BookFilter } from '../models/book.filter';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css'],

})
@Injectable({ providedIn: 'root' })

export class AddEditComponent implements OnInit {

  private id: number = 0;
  public isAddMode: boolean = false;
  public bookModel: BookModel = <BookModel>{};
  public bookResource: BookResource = <BookResource>{};
  public bookForm: FormGroup = <FormGroup>{};
  public authors: Array<AuthorResource> = [];
  public publishers: Array<PublisherResource> = [];
  public bookFilter: BookFilter =  <BookFilter> {};


  constructor(private bookService: BookService,
    private authorService: AuthorService,
    private publisherService: PublisherService,
    private notification: NotificationManager,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.isAddMode = !this.id;
    this.bookForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(35)]),
      publisherId: new FormControl('', [Validators.required]),
      publishDate: new FormControl('', [Validators.required]),
      authorIds: new FormControl('', [Validators.required])
    });

    this.getAuthors();
    this.getPublishers();
    if (!this.isAddMode) {
      this.getDetails();
    }
  }

  createBook(): void {
    this.bookService.Create(this.bookModel).subscribe((response: any) => {
      if (response.status == 409)
        this.notification.errorMessage(response.title);

      if (response.status == 400)
        this.notification.errorMessage(response.title);

      if (response.status == 500)
        this.notification.errorMessage("Failed to create a book.");

       if(response.status == undefined){
        this.notification.successMessage("The book created succefully.");
        this.location.back();
       }

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
    this.bookFilter.authors = true;
    this.bookFilter.publihser = true;
    this.bookService.getExtraBookDetails(this.bookFilter,this.id).subscribe((response: any) => {
      this.bookResource = response;
      let dateString = this.bookResource["releaseDate"];
      let newDate = new Date(dateString);
      console.log(response);
      this.bookForm.patchValue({
        name: this.bookResource?.name,
        publisherId: this.bookResource.publisher?.id,
        authorIds: this.bookResource?.authorResources,
        publishDate: newDate,
      });
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



  public selectAuthors(value: any): void {
    this.bookModel.AuthoIds = [];
    value.forEach((element: any) => {
      this.bookModel.AuthoIds.push(element.id);
    });
  }



  submit(): void {
    if (this.bookForm.invalid)
    return;

    this.bookModel.id = this.bookResource.id;
    this.bookModel.name = this.bookForm.controls['name'].value;
    this.bookModel.releaseDate = this.bookForm.controls['publishDate'].value;
    this.bookModel.publisherId = +this.bookForm.controls['publisherId'].value;
    var datePipe = new DatePipe('en-US');
    this.bookModel.releaseDate = datePipe.transform(this.bookModel.releaseDate, 'yyyy-MM-dd') || '';
    this.isAddMode ? this.createBook() : this.updateBook();
  }

}
