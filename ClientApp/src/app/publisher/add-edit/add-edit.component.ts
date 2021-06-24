import { PublisherResource } from './../resources/publisher.resource';
import { PublisherService } from '../services/publisher.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NotificationManager } from 'src/app/shared/notification.manager';


@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  public publisherResource: PublisherResource = <PublisherResource>{};
  constructor(private route: ActivatedRoute, private publisherService: PublisherService, private notificationManager: NotificationManager, private location: Location) { }


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
      this.getDetails();
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

    this.publisherResource.firstName = this.publisherForm.controls['firstName'].value;
    this.publisherResource.lastName = this.publisherForm.controls['lastName'].value;
    this.publisherResource.phone = this.publisherForm.controls['phone'].value;
    this.publisherResource.email = this.publisherForm.controls['email'].value;
    this.publisherResource.address = this.publisherForm.controls['address'].value;

    this.addMode ? this.createPublisher() : this.updatePublisher();

  }

  createPublisher(): void {
    this.publisherService.Create(this.publisherResource).subscribe((response: any) => {
      this.notificationManager.successMessage("A publisher created successfully.");
      this.location.back();
    }, (error) => {
      this.notificationManager.errorMessage("cannot create a publisher.");
    });
  }


  updatePublisher(): void {
    this.publisherService.Update(this.publisherResource).subscribe((response: any) => {
      this.notificationManager.successMessage("The Publisher updated Successfully.");
      this.location.back();
    },
      (error) => {
        this.notificationManager.errorMessage("cannot update the current publisher.");
      });
  }

  getDetails(): void {
    this.publisherService.Details(this.id).subscribe
      (
        (response: any) => {
          this.publisherResource = response;
          this.publisherForm.patchValue(
            {
              firstName: this.publisherResource.firstName,
              lastName: this.publisherResource.lastName,
              email: this.publisherResource.email,
              phone: this.publisherResource.phone,
              address: this.publisherResource.address
            });
        }
      );
  }
}
