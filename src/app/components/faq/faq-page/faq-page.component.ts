import { Component, OnInit } from '@angular/core';

import { CmsContentTypes } from 'app/cms/cms-content-types';
import { CMSService } from 'app/services/CMS.service';
import { FaqCmsModel } from './faq-cms-model';
import { UserService } from 'app/services/user/User.service';
import {UserStateComponent} from 'app/BaseComponent';
import {Title, Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.scss']
})
export class FAQPageComponent extends UserStateComponent implements OnInit {
  public faqCmsModel: FaqCmsModel = null;

  public userStateChanged() {
    // throw new Error("Method not implemented.");
  }

  public cmsUpdated() {
    this.faqCmsModel = this.cmsService.getCmsComponent(FaqCmsModel, CmsContentTypes.PageHelp);
    this.setHead();
  }

  constructor(cmsService: CMSService, userService: UserService, private titleService: Title, private metaService: Meta) {
    super(cmsService, userService);
  }

  ngOnInit() {
    this.cmsUpdated();
  }

  public setHead(){
    if(this.faqCmsModel && this.metaService) {
      this.metaService.addTag({name: 'description', content: this.faqCmsModel.metaData.description});
      this.metaService.addTag({name: 'keywords', content: this.faqCmsModel.metaData.keywords});
      this.titleService.setTitle(this.faqCmsModel.metaData.title);
    }
  }
}
