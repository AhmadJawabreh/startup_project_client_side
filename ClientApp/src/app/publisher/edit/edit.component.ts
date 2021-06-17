import { PublisherResource } from './../resources/publisher.resource';
import { PublisherService } from '../services/publisher.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '@progress/kendo-angular-notification';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public publisherResource: PublisherResource = <PublisherResource>{};
  constructor(private route: ActivatedRoute,private publisherService: PublisherService,private notificationService: NotificationService,private location: Location) { }



  public id : number = 0;
  public publisherForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    this.publisherService.Details(this.id).subscribe((response: any) => {
      this.publisherResource = response;
      console.log(this.publisherResource);
      this.publisherForm = new FormGroup({
        firstName: new FormControl(this.publisherResource.firstName,[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
        lastName: new FormControl(this.publisherResource.lastName,[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
        email: new FormControl(this.publisherResource.email,Validators.email),
        phone: new FormControl(this.publisherResource.phone,[Validators.minLength(2),Validators.maxLength(10)]),
        address: new FormControl(this.publisherResource.address,[Validators.required,Validators.minLength(5),Validators.maxLength(15)]),
    });
    });



  }
  submit(): void {

    this.publisherResource.firstName = this.publisherForm.controls['firstName'].value;
    this.publisherResource.lastName = this.publisherForm.controls['lastName'].value;
    this.publisherResource.phone = this.publisherForm.controls['phone'].value;
    this.publisherResource.email = this.publisherForm.controls['email'].value;
    this.publisherResource.address = this.publisherForm.controls['address'].value;

    console.log(this.publisherResource);
    if(this.publisherForm.valid)
    {
      this.publisherService.Update(this.publisherResource).subscribe((response: any) => {
         this.notificationService.show({
          content: "The Publisher updated Successfully.",
          hideAfter: 1000,
          position: { horizontal: "right", vertical: "top" },
          animation: { type: "fade", duration: 500 },
          type: { style: "success", icon: true },
        });
        this.location.back();
      },
      (error) => {
        this.notificationService.show({
          content: "Cann't update the current publisher.",
          hideAfter: 1000,
          position: { horizontal: "right", vertical: "top" },
          animation: { type: "fade", duration: 500 },
          type: { style: "error", icon: true },
        });
      });

    }
  }
}

