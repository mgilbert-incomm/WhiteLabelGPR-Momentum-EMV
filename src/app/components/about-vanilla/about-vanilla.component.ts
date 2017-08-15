import { Component, OnInit } from '@angular/core';
import {UserStateComponent} from "../../BaseComponent";
import {UserService} from "../../services/user/User.service";
import {CMSService} from "../../services/CMS.service";
import {CmsContentTypes} from "../../cms/cms-content-types";
import {AboutVanillaCmsModel} from "./about-vanilla-cms-model";
import {Title, Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-about-vanilla',
  templateUrl: './about-vanilla.component.html',
  styleUrls: ['./about-vanilla.component.css']
})
export class AboutVanillaComponent extends UserStateComponent implements OnInit {

  public aboutVanillaCmsModel: AboutVanillaCmsModel = null;
  userStateChanged(UserState) {
  }

  cmsUpdated() {
    this.aboutVanillaCmsModel = this.cmsService.getCmsComponent(AboutVanillaCmsModel, CmsContentTypes.PageAboutVanilla);
    this.setHead();
  }

  constructor(cmsService: CMSService,userService: UserService, private titleService: Title, private metaService: Meta) {
    super(cmsService, userService);
  }

  ngOnInit() {
  }

  public setHead(){
    if(this.aboutVanillaCmsModel && this.metaService) {
      console.log("Do check ", this.aboutVanillaCmsModel.metaData);
      this.metaService.removeTag("name ='description'");
      this.metaService.removeTag("name = 'keywords'");
      this.metaService.addTag({name: 'description', content: this.aboutVanillaCmsModel.metaData.description});
      this.metaService.addTag({name: 'keywords', content: this.aboutVanillaCmsModel.metaData.keywords});
      this.titleService.setTitle(this.aboutVanillaCmsModel.metaData.title);
    }
  }
}
