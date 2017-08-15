import {Component, OnInit, HostListener, ViewChild} from '@angular/core';
import {CMSService} from 'app/services/CMS.service';
import {UserService} from 'app/services/user/User.service';
import {WindowRef} from '../../services/WindowRef';
import {UserStateComponent} from '../../BaseComponent';
import { CmsContentTypes } from 'app/cms/cms-content-types';
import { FooterCmsModel } from 'app/components/footer/footer-cms-model';
import { LinkCmsModel } from 'app/cms/shared/link-cms-model';

/* Sub-components */
import {NewsletterComponent} from '../newsletter/newsletter.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent extends UserStateComponent implements OnInit {

  userData: object;
  footerCmsModel: FooterCmsModel;
  currentYear = new Date().getFullYear();

  constructor(cmsService: CMSService, userService: UserService, private winRef: WindowRef) {
    super(cmsService, userService);
  }

  /* Called when user state changed */
  userStateChanged() {
    this.userData = this.userService.userStateModel;
  }

  /* Called when content is retrieved from CMS */
  cmsUpdated() {
    this.footerCmsModel = this.cmsService.getCmsComponent(FooterCmsModel, CmsContentTypes.PageFooter);
  }

  scrollToTop() {
    this.winRef.nativeWindow.scrollTo(0, 0);
  }

  ngOnInit() {
  }

  private checkVisibility(item: LinkCmsModel) {
    switch (item.linkVisibility) {
      case 'Not Logged In':
        if (!this.userData['loggedIn']) {
          return true;
        }
        return false;
      case 'Logged In':
        if (this.userData['loggedIn']) {
          return true;
        }
        return false;
      case 'Public':
        return true;
    }
    return false;
  }
}
