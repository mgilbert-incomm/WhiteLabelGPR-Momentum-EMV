import { Component, OnInit } from '@angular/core';
import {NotificationService} from "../../services/notification/Notification.service";
import {Notification, NotificationType} from "./notification.model";

@Component({
  selector: 'app-notification',
  templateUrl: 'notification.component.html',
  styleUrls: ['notification.component.css']
})
export class NotificationComponent implements OnInit {

  notifications: Notification [] = [];
  showMessage: boolean;

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {

      this.notificationService.getNotification().subscribe((notification: Notification) => {
        if (!notification) {
          // clear alerts when an empty alert is received
          this.notifications = [];
          return;
        }

        // add alert to array
        this.notifications = [];
        this.notifications.push(notification);
        this.displayMessage();
        console.log("Notification added");
      });
    }

  removeNotification(alert: Notification) {
    this.notifications = this.notifications.filter(x => x !== alert);
  }

  notificationCss(notification: Notification){

    if (!notification) {
      return;
    }

    // return css class based on alert type
    switch (notification.type) {
      case NotificationType.Success:
        return 'success';
      case NotificationType.Error:
        return 'error';
    }
  }

  displayMessage(){
    this.showMessage = true;

    setTimeout(function() {
      this.showMessage = false;
    }.bind(this), 5000);

  }
}
