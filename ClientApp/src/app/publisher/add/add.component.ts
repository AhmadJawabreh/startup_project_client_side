import { PublisherService } from '../services/publisher.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PublisherModel } from '../models/publisher.model';
import { NotificationService } from '@progress/kendo-angular-notification';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public publisherModel: PublisherModel = <PublisherModel>{};
  constructor(private publisherService: PublisherService,private notificationService: NotificationService,private location: Location) { }




  public publisherForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.publisherForm = new FormGroup({
        firstName: new FormControl(this.publisherModel.firstName,[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
        lastName: new FormControl(this.publisherModel.lastName,[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
        email: new FormControl(this.publisherModel.email,Validators.email),
        phone: new FormControl(this.publisherModel.phone,[Validators.minLength(2),Validators.maxLength(10)]),
        address: new FormControl(this.publisherModel.address,[Validators.required,Validators.minLength(5),Validators.maxLength(15)]),
    });
  }
  submit(): void {

    this.publisherModel.firstName = this.publisherForm.controls['firstName'].value;
    this.publisherModel.lastName = this.publisherForm.controls['lastName'].value;
    this.publisherModel.phone = this.publisherForm.controls['phone'].value;
    this.publisherModel.email = this.publisherForm.controls['email'].value;
    this.publisherModel.address = this.publisherForm.controls['address'].value;

    console.log(this.publisherModel);
    if(this.publisherForm.valid)
    {
      this.publisherService.Create(this.publisherModel).subscribe((response: any) => {
         this.notificationService.show({
          content: "Publisher created Successfully.",
          hideAfter: 1000,
          position: { horizontal: "right", vertical: "top" },
          animation: { type: "fade", duration: 500 },
          type: { style: "success", icon: true },
        });
        this.location.back();
      },
      (error) => {
        this.notificationService.show({
          content: "Cann't create a publisher.",
          hideAfter: 1000,
          position: { horizontal: "right", vertical: "top" },
          animation: { type: "fade", duration: 500 },
          type: { style: "error", icon: true },
        });
      });

    }

  }
}
