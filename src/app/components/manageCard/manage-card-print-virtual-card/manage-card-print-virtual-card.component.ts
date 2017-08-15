import {Component, OnInit} from '@angular/core';
import {UserStateComponent} from '../../../BaseComponent';
import {CMSService} from '../../../services/CMS.service';
import {UserService} from '../../../services/user/User.service';
import {
  ManageCardCmsModel, ManageVirtualCardCmsModel,
  ManageVirtualCardPrintSectionCmsModel
} from '../manageCard-page/manageCard-cms-model';
import {CmsContentTypes} from '../../../cms/cms-content-types';
import {GreenCard} from "../../../services/greencard/GreenCard.service";
import {BalAndTransCmsModel} from "../manage-card-bal-and-trans/manage-card-bal-and-trans-cms-model";

@Component({
  selector: 'app-manage-card-print-virtual-card',
  templateUrl: './manage-card-print-virtual-card.component.html',
  styleUrls: ['./manage-card-print-virtual-card.component.css']
})
export class ManageCardPrintVirtualCardComponent extends UserStateComponent implements OnInit {
  manageCardCmsModel: ManageCardCmsModel;
  balanceTransactionsCmsModel: BalAndTransCmsModel;
  printCmsModel: ManageVirtualCardPrintSectionCmsModel;
  currentDateTime: string;
  denomination: string;
  totalDebits: string;

  cmsUpdated() {
    if (this.cmsService.cmsContent) {
      this.manageCardCmsModel = this.cmsService.getCmsChildComponent(ManageCardCmsModel,
        CmsContentTypes.PageManageCard,
        'manageCardSection');
      const balanceTransactionsCmsModel = this.cmsService.getCmsChildComponent(ManageCardCmsModel,
        CmsContentTypes.PageManageCard,
        'manageCardSection');
      for (const item of balanceTransactionsCmsModel.tabComponents) {
        switch (item['type']) {
          case 'modelBalanceAndTransactions':
            this.balanceTransactionsCmsModel = item['fields'];
            break;
          default:
            break;
        }
      }
      const manageVirtualCardCmsModel = this.cmsService.getCmsChildComponent(ManageVirtualCardCmsModel,
        CmsContentTypes.PageManageCard,
        'manageVirtualCardComponent');

      if (manageVirtualCardCmsModel && manageVirtualCardCmsModel.printSection) {
        this.printCmsModel = new ManageVirtualCardPrintSectionCmsModel(manageVirtualCardCmsModel.printSection['fields']);
      }
    }
  }

  userStateChanged(newState) {
    this.userState = newState;
    if (this.userState.balanceInfo) {
      if (this.userState.balanceInfo.denomination) {
        this.denomination = this.userState.balanceInfo.denomination['toMoney'](2);
      }
      if (this.userState.balanceInfo.totalDebits) {
        this.totalDebits = this.userState.balanceInfo.totalDebits['toMoney'](2);
      }
    }
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
    const curDateTime = new Date();
    this.currentDateTime = curDateTime.getMonth() + '/'
      + curDateTime.getDay() + '/'
      + curDateTime.getFullYear() + ' '
      + (curDateTime.getHours() % 12) + ':'
      + (curDateTime.getMinutes() < 10 ? '0' : '')
      + curDateTime.getMinutes()
      + (curDateTime.getHours() > 12 ? ' PM' : ' AM');
  }

}
