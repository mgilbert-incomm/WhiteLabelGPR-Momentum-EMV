import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import {CmsContentTypes} from 'app/cms/cms-content-types';
import {CMSService} from 'app/services/CMS.service';
import {BalAndTransCmsModel} from './manage-card-bal-and-trans-cms-model';
import {UserService} from 'app/services/user/User.service';
import {UserStateComponent} from 'app/BaseComponent';
import {UserStateModel} from "../../../services/user/user-state-model";

@Component({
  selector: 'app-managecard-balandtrans',
  templateUrl: './manage-card-bal-and-trans.component.html',
  styleUrls: ['./manage-card-bal-and-trans.component.scss']
})
export class ManageCardBalAndTransComponent extends UserStateComponent implements OnInit {
  @Input() model: BalAndTransCmsModel;
  @Output() printTransactions = new EventEmitter<void>();
  public balandAndTransCmsModel: BalAndTransCmsModel = null;
  public selectedTabIndex = 0;

  denomination: string;
  totalDebits: string;
  totalCredits: string;
  balance: string;

  public doPrint() {
    this.printTransactions.next();
  }

  public userStateChanged(newState: UserStateModel) {
    this.userState = newState;
    if (newState && newState.balanceInfo) {
      this.denomination = newState.balanceInfo.denomination['toMoney'](2);
      this.totalDebits = newState.balanceInfo.totalDebits['toMoney'](2);
      this.totalCredits = newState.balanceInfo.totalCredits['toMoney'](2);
      this.balance = newState.balanceInfo.balance['toMoney'](2);
    }
  }
  public cmsUpdated() {

  }

  public setSelectedTab(idx) {
    this.selectedTabIndex = idx;
  }

  constructor(cmsService: CMSService, userService: UserService) {
    super(cmsService, userService);
  }

  ngOnInit() {
  }
}
