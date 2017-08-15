import {Injectable} from '@angular/core';
import {Router, NavigationStart} from '@angular/router';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs/Subject';

import {Notification, NotificationType} from '../../components/notification/notification.model';
import {MessageCmsModel} from "./message-cms-model";
import {CMSService} from "../CMS.service";
import {CmsContentTypes} from "../../cms/cms-content-types";
import {BaseComponent} from "../../BaseComponent";

@Injectable()
export class NotificationService extends BaseComponent {
  private subject = new Subject<Notification>();
  private keepAfterRouteChange = false;
  private messageCmsModel: MessageCmsModel;

  constructor(private router: Router, cmsService: CMSService) {
    super(cmsService);
    // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterRouteChange) {
          // only keep for a single route change
          this.keepAfterRouteChange = false;
        } else {
          // clear alert messages
          this.clear();
        }
      }
    });
  }

  getNotification(): Observable<any> {
    return this.subject.asObservable();
  }

  success(messageKey: string, keepAfterRouteChange = false) {
    let message = this.getMessage(messageKey, "Success");
    this.alert(NotificationType.Success, message, keepAfterRouteChange);
  }

  error(messageKey: string, keepAfterRouteChange = false) {
    console.log("Setting error", messageKey);
    let message = this.getMessage(messageKey, "Error");
    console.log("Setting message ", message);
    this.alert(NotificationType.Error, message, keepAfterRouteChange);
  }


  alert(type: NotificationType, message: string, keepAfterRouteChange = false) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next(<Notification>{type: type, message: message});
  }

  clear() {
    this.subject.next();
  }

  getMessage(messageKey: string, type: string): string {

    let message = '';
    if (type === "Error") {
      let messageObject = this.messageCmsModel.errorMessages.filter(el => el.code === messageKey)[0];
      if(messageObject) {
        return messageObject.message;
      }
      else {
        return "An Unknown Error Occured";
      }
    }
    else if (type === "Success") {
      message = this.messageCmsModel.successMessages.filter(el => el.code === messageKey)[0].message;
    }

    if (message.length > 1) {
      return message;
    }
    return "Unknown Error Occured";
  }

  public cmsUpdated() {

    this.messageCmsModel = this.cmsService.getCmsComponent(MessageCmsModel, CmsContentTypes.PageConfiguration);
    console.log(this.messageCmsModel);
  }
}
