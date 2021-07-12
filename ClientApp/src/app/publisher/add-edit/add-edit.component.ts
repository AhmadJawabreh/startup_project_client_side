import { getPublisher } from './../store/publisher.selector';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { PublisherModel } from './../models/publisher.model';
import { PublisherResource } from './../resources/publisher.resource';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { createPublisher, updatePublisher } from '../store/publisher.actions';
import { AppState } from '../store/app.state';


@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {


  public publisherResource: PublisherResource = <PublisherResource>{};

  public publisherModel: PublisherModel = <PublisherModel>{};


  constructor(private store: Store<AppState>, private route: ActivatedRoute, private location: Location) { }


  private id: number = -1;
  public addMode: boolean = false;
  public publisherForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
    email: new FormControl('', Validators.email),
    phone: new FormControl('', [Validators.minLength(2), Validators.maxLength(10)]),
    address: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
  });

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.addMode = this.id > 0 ? false : true;
    if (!this.addMode) {
      this.store.select(getPublisher(this.id)).subscribe(data => this.publisherResource = data as PublisherResource);

      this.publisherForm.patchValue(
        {
          firstName: this.publisherResource.firstName,
          lastName: this.publisherResource.lastName,
          email: this.publisherResource.email,
          phone: this.publisherResource.phone,
          address: this.publisherResource.address
        });
    }
  }


  submit(): void {

    if (this.publisherForm.invalid) {
      return;
    }

    this.publisherModel.id = this.id ?? 0;
    this.publisherModel.firstName = this.publisherForm.controls['firstName'].value;
    this.publisherModel.lastName = this.publisherForm.controls['lastName'].value;
    this.publisherModel.phone = this.publisherForm.controls['phone'].value;
    this.publisherModel.email = this.publisherForm.controls['email'].value;
    this.publisherModel.address = this.publisherForm.controls['address'].value;

    this.addMode ? this.createPublisher() : this.updatePublisher();
    this.location.back();

  }

  createPublisher(): void {
    this.store.dispatch(createPublisher({ payload: { publisherModel: this.publisherModel } }));
  }


  updatePublisher(): void {
    this.store.dispatch(updatePublisher({ payload: { publisherModel: this.publisherModel } }));
  }

}

