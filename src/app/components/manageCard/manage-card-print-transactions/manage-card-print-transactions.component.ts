import { Component, OnInit } from '@angular/core';
import {BaseComponent, UserStateComponent} from "../../../BaseComponent";
import {CMSService} from "../../../services/CMS.service";
import {UserService} from "../../../services/user/User.service";
import {GreenCard} from "../../../services/greencard/GreenCard.service";
import {ManageCardCmsModel} from "../manageCard-page/manageCard-cms-model";
import {CmsContentTypes} from "../../../cms/cms-content-types";

@Component({
  selector: 'app-manage-card-print-transactions',
  templateUrl: './manage-card-print-transactions.component.html',
  styleUrls: ['./manage-card-print-transactions.component.css']
})
export class ManageCardPrintTransactionsComponent extends UserStateComponent implements OnInit {

  manageCardSectionCmsModel: ManageCardCmsModel;
  constructor(cmsService: CMSService, userService: UserService, private gcService: GreenCard) {
    super(cmsService, userService);
  }
  cmsUpdated() {
    this.manageCardSectionCmsModel = this.cmsService.getCmsChildComponent(ManageCardCmsModel, CmsContentTypes.PageManageCard, 'manageCardSection');
  }

  userStateChanged(newState) {
    this.userState = newState;
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
