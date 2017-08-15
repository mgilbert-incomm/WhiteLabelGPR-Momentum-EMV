import {Component, OnInit, HostListener, ViewChild} from '@angular/core';
import {CMSService} from 'app/services/CMS.service';
import {UserService} from 'app/services/user/User.service';
import {WindowRef} from 'app/services/WindowRef';
import {DocumentRef} from 'app/services/DocumentRef';
import {UserStateComponent} from 'app/BaseComponent';
import { HeaderCmsModel } from 'app/components/header/header-cms-model';
import { CmsContentTypes } from 'app/cms/cms-content-types';
import {NotificationService} from '../../services/notification/Notification.service';
import { Subscription } from 'rxjs/Subscription';
import { ModalService } from 'app/services/modal/modal.service';
import { ImageModalModel } from 'app/services/modal/image-modal-model';
import {Notification, NotificationType} from "../notification/notification.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends UserStateComponent implements OnInit {
  @ViewChild('mobileMenuContainer') mobileMenuContainer: any;
  additionalMenuItemsClass: string;
  mobileMaxWidth: number;
  desktopView: boolean;
  menuItemsAdded: boolean;
  showProgramNamesInMobileMenu: boolean;
  isMobileMenuActive: boolean;
  headerCmsModel: HeaderCmsModel;

  imageModalModel: ImageModalModel;
  animateImageModal: boolean;

  constructor(cmsService: CMSService, userService: UserService, private docRef: DocumentRef, private winRef: WindowRef,
             modalService: ModalService) {
    super(cmsService, userService);

    modalService.imageModal$.subscribe(
      imageModalModel => {
        this.imageModalModel = imageModalModel;

        // the css transition won't work until the div has a display value that isn't 'none'
        // so we delay applying the css transation with this setTimeout()
        setTimeout( () => { this.animateImageModal = true; } , 100);
      }
    );
  }

   ngOnInit() {
    this.mobileMaxWidth = 768;
    this.desktopView = !(this.winRef.nativeWindow.innerWidth < this.mobileMaxWidth);
    this.additionalMenuItemsClass = 'addToMenu';
    this.showProgramNamesInMobileMenu = false;
    this.isMobileMenuActive = false;
    this.animateImageModal = false;
  }

  /* Called when user state changed */
  userStateChanged(newState) {
    this.userState = newState;
  }

  /* Called when content is retrieved from CMS */
  cmsUpdated() {
    this.headerCmsModel = this.cmsService.getCmsComponent(HeaderCmsModel, CmsContentTypes.PageHeader);
    this.setupMobileMenuItems();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.desktopView = !(event.target.innerWidth < this.mobileMaxWidth);
  }

  private getProgramNameClasses() {
    if (this.showProgramNamesInMobileMenu) {
      return this.additionalMenuItemsClass;
    }
    return null;
  }

  private hasBottomNavigation() {
    return this.headerCmsModel.lowerLogo || this.headerCmsModel.btmNavigationLinks;
  }

  private hasTopNavigation() {
    return this.headerCmsModel.programLogo || this.headerCmsModel.upperHeaderLinks || this.headerCmsModel.programNames;
  }

  private checkVisibility(item) {
    switch (item.linkVisibility) {
      case 'Not Logged In':
        if (!this.userState.loggedIn) {
          return true;
        }
        return false;
      case 'Logged In':
        if (this.userState.loggedIn) {
          return true;
        }
        return false;
      case 'Public':
        return true;
    }
    return false;
  }

  toggleMobileMenu() {
    this.isMobileMenuActive = !this.isMobileMenuActive;
  }

  toggleImageModal() {
    this.imageModalModel.isVisible = !this.imageModalModel.isVisible;
    this.animateImageModal = false;
  }

  setupMobileMenuItems() {
    // if (!this.menuItemsAdded) {
      if (this.additionalMenuItemsClass) {
        const children = this.docRef.nativeDocument.querySelectorAll('.' + this.additionalMenuItemsClass);
        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          child.classList.remove('addToMenu');
          this.mobileMenuContainer.nativeElement.firstChild.appendChild(child.cloneNode(true));
          child.classList.add('addToMenu');
        }
      }
      this.menuItemsAdded = true;
    // }
  }
}
