import { Component, OnInit } from '@angular/core';
import { UserStateComponent } from 'app/BaseComponent';
import { CMSService } from 'app/services/CMS.service';
import { UserService } from 'app/services/user/User.service';
import { ManagePinCmsModel } from 'app/components/manage-pin/manage-pin/manage-pin-cms-model';
import { CmsContentTypes } from 'app/cms/cms-content-types';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-manage-pin-page',
  templateUrl: './manage-pin-page.component.html',
  styleUrls: ['./manage-pin-page.component.css']
})
export class ManagePinPageComponent extends UserStateComponent implements OnInit {

  managePinCmsModel: ManagePinCmsModel;

  public userStateChanged(UserState: any) {

  }
  public cmsUpdated() {
    this.managePinCmsModel = this.cmsService.getCmsComponent(ManagePinCmsModel, CmsContentTypes.PageManagePin);
    this.setHead();
  }

  constructor(cmsService: CMSService, userService: UserService, private titleService: Title, private metaService: Meta) {
    super(cmsService, userService);
  }

  public setHead() {
    if (this.managePinCmsModel && this.metaService) {
      this.metaService.addTag({name: 'description', content: this.managePinCmsModel.metaData.description});
      this.metaService.addTag({name: 'keywords', content: this.managePinCmsModel.metaData.keywords});
      this.titleService.setTitle(this.managePinCmsModel.metaData.title);
    }
  }

  ngOnInit() {}
}
