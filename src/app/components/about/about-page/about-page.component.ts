import {Component, OnInit, DoCheck} from '@angular/core';

import {CMSService} from "../../../services/CMS.service";
import {UserStateComponent} from "../../../BaseComponent";
import {FaqCmsModel} from "../../faq/faq-page/faq-cms-model";
import {CmsContentTypes} from "../../../cms/cms-content-types";
import {AboutCmsModel} from "./about-cms-model";
import {AboutTabCmsModel} from "../about-tab/about-tab-cms-model";
import {UserService} from "../../../services/user/User.service";
import {Title} from "@angular/platform-browser";
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about-page',
  templateUrl: 'about-page.component.html',
  styleUrls: ['about-page.component.scss']
})

export class AboutPageComponent extends UserStateComponent implements OnInit {

  public aboutCmsModel: AboutCmsModel = null;
  public selectedTab: AboutTabCmsModel;

  public userStateChanged() {
    // throw new Error("Method not implemented.");
  }

  public cmsUpdated() {

    this.aboutCmsModel = this.cmsService.getCmsComponent(AboutCmsModel, CmsContentTypes.PageAbout);
    this.setSelectedTab(this.aboutCmsModel && this.aboutCmsModel.tabItems[0] || null);
    this.setHead();
  }



  constructor(cmsService: CMSService, userService: UserService, private titleService: Title, private metaService: Meta) {
    super(cmsService, userService);



  }

  public setSelectedTab(item: AboutTabCmsModel): void{
    this.selectedTab = item;
  }

  ngOnInit() {

  }

  public setHead(){
    if(this.aboutCmsModel && this.metaService) {
      console.log("Do check ", this.aboutCmsModel.metaData);
      this.metaService.addTag({name: 'description', content: this.aboutCmsModel.metaData.description});
      this.metaService.addTag({name: 'keywords', content: this.aboutCmsModel.metaData.keywords});
      this.titleService.setTitle(this.aboutCmsModel.metaData.title);
    }
  }
}
