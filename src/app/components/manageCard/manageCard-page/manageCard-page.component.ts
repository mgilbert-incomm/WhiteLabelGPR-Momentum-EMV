import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import {CmsContentTypes} from 'app/cms/cms-content-types';
import {CMSService} from 'app/services/CMS.service';
import {ManageCardPageCmsModel, ManageCardCmsModel, ManageVirtualCardCmsModel} from './manageCard-cms-model';
import {UserService} from 'app/services/user/User.service';
import {UserStateComponent} from 'app/BaseComponent';
import {GreenCard} from 'app/services/greencard/GreenCard.service';

@Component({
  selector: 'app-managecard-page',
  templateUrl: './manageCard-page.component.html',
  styleUrls: ['./manageCard-page.component.scss']
})
export class ManageCardPageComponent extends UserStateComponent implements OnInit {
  @ViewChild('printTransactionsFrame') printTransactionsFrame: ElementRef;
  public manageCardSectionCmsModel: ManageCardCmsModel = null;
  public selectedTabIndex = 0;
  public mobileSubNavOpen = false;
  balance: string;


  public userStateChanged(userState) {
    if (userState.balanceInfo) {
      this.balance = userState.balanceInfo.balance['toMoney'](2);
    }
  }

  public setSelectedTab(idx) {
    this.selectedTabIndex = idx;
  }

  public toggleMobileSubNav() {
    this.mobileSubNavOpen = !this.mobileSubNavOpen;
  }

  public printTransactions() {
    const target = this.printTransactionsFrame.nativeElement.contentWindow;
    try {
      let result = target.document.execCommand('print', false, null);
      if (!result) {
        target.print();
      }
    } catch (e) {
      target.print();
    }
  }


  public cmsUpdated() {
    this.manageCardSectionCmsModel = this.cmsService.getCmsChildComponent(ManageCardCmsModel, CmsContentTypes.PageManageCard, 'manageCardSection');
  }

  constructor(cmsService: CMSService, userService: UserService, private gcService: GreenCard) {
    super(cmsService, userService);
  }

  ngOnInit() {
    this.gcService.balance().subscribe((res) => {
      this.userService.changeBalanceInfo((res));

    });
    this.gcService.transactionHistory().subscribe((res) => {
      this.userService.changeTransactionHistory(res);
    });
    this.gcService.getZipCode().subscribe((res) => {
      this.userService.changeZipCode(res['zipCode']);
    });
    this.gcService.getCardInfo().subscribe((res) => {
      this.userService.changeCardInfo(res);
    });
  }
}
