import { Component, OnInit, Input } from '@angular/core';
import { AssignZipCmsModel } from './manage-card-assign-zip-cms-model';
import {UserStateComponent} from "../../../BaseComponent";
import {CMSService} from "../../../services/CMS.service";
import {UserService} from "../../../services/user/User.service";
import {GreenCard} from "../../../services/greencard/GreenCard.service";
import {RegisterZipCodeRequest} from 'app/services/greencard/requests/registerZipCode.request';
import {NotificationService} from "../../../services/notification/Notification.service";

@Component({
  selector: 'app-manage-card-assign-zip',
  templateUrl: './manage-card-assign-zip.component.html',
  styleUrls: ['./manage-card-assign-zip.component.scss']
})
export class ManageCardAssignZipComponent extends UserStateComponent implements OnInit {
  @Input() model: AssignZipCmsModel;
  editingZipCode = false;
  zipCode: string = null;
  zipCodeTemp: string = null;

  cmsUpdated() {

  }
  userStateChanged(newState) {
    this.userState = newState;
    if (!this.userState.zipCode) {
      this.editingZipCode = true;
    } else {
      this.editingZipCode = false;
    }
  }
  constructor(cmsService: CMSService, userService: UserService, private gcService: GreenCard, private notificationService: NotificationService) {
    super(cmsService, userService);
    this.zipCode = '';
  }

  setZipCode() {
    let ZIP_REGEX = /^\d{5}(?:[-\s]\d{4})?$/;
    console.log("REGEX TEST ", ZIP_REGEX.test(this.zipCodeTemp));
    if( !ZIP_REGEX.test(this.zipCodeTemp)){
      this.notificationService.error("ERR_INVALID_ZIPCODE", false);
    }
    else {
      this.gcService.registerZipCode(new RegisterZipCodeRequest(this.zipCodeTemp)).subscribe((res) => {
        this.userService.changeZipCode(this.zipCodeTemp);
        this.editingZipCode = false;
      });
    }
  }

  toggleEditZipCode() {
    this.zipCodeTemp = null;
    this.editingZipCode = !this.editingZipCode;
  }


  ngOnInit() {
  }

}
