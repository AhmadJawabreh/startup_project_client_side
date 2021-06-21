import { Injectable } from "@angular/core";
import { NotificationService } from "@progress/kendo-angular-notification";

@Injectable({ providedIn: 'root' })

export class NotificationManager {

  constructor(private notificationService:NotificationService){}

   successMessage(body: string): void {
    this.notificationService.show({
      content: body,
      hideAfter: 1000,
      position: { horizontal: "right", vertical: "top" },
      animation: { type: "fade", duration: 500 },
      type: { style: "success", icon: true },
    });
  }

  errorMessage(body: string): void {
    this.notificationService.show({
      content: body,
      hideAfter: 1000,
      position: { horizontal: "right", vertical: "top" },
      animation: { type: "fade", duration: 500 },
      type: { style: "error", icon: true },
    });
  }

}
