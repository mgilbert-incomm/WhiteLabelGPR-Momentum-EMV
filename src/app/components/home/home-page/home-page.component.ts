import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'app/BaseComponent';
import { CMSService } from 'app/services/CMS.service';
import { CmsContentTypes } from 'app/cms/cms-content-types';
import { HomePageCmsModel } from 'app/components/home/home-page/home-page-cms-model';
import { UserService } from '../../../services/user/User.service';
import {Title, Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent extends BaseComponent implements OnInit {

  homePageCmsModel: HomePageCmsModel;
  heroImage: string;

  constructor(public cmsService: CMSService, public userService: UserService, private titleService: Title, private metaService: Meta) {
    super(cmsService);
  }

  public cmsUpdated() {
    this.homePageCmsModel = this.cmsService.getCmsComponent(HomePageCmsModel, CmsContentTypes.PageHome);
    if (this.homePageCmsModel) {
      this.heroImage = this.homePageCmsModel.heroCmsModel.heroImageUrls[0];
    }
    this.setHead();
  }

  ngOnInit() {}

  public setHead(){
    if(this.homePageCmsModel && this.metaService) {
      this.metaService.addTag({name: 'description', content: this.homePageCmsModel.metaData.description});
      this.metaService.addTag({name: 'keywords', content: this.homePageCmsModel.metaData.keywords});
      this.titleService.setTitle(this.homePageCmsModel.metaData.title);
    }
  }
}
