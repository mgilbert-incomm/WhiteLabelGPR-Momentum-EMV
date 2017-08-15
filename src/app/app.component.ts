import { Component, OnInit, OnChanges, AfterViewChecked, Input } from '@angular/core';
import {CMSService} from "./services/CMS.service";
import {environment} from "../environments/environment";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewChecked, OnChanges {
  spaceID: string;
  accessToken: string;
  @Input('location')
  location: string;

  constructor(public cmsService: CMSService) {
    this.location = environment.location;
    this.spaceID = environment.spaceId;
    this.accessToken = environment.accessToken;
  }

  ngAfterViewChecked() {
  }

  ngOnChanges() {

  }

  ngOnInit() {
    this.cmsService.setLocale(this.location);
    this.cmsService.setSpace(this.spaceID);
    this.cmsService.setToken(this.accessToken);
    this.cmsService.getContent();
  }

}
