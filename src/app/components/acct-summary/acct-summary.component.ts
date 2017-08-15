import { Component, OnInit } from '@angular/core';
import { UserStateComponent } from '../../BaseComponent';
import { CMSService } from '../../services/CMS.service';
import { AcctSummaryCmsModel } from './acct-summary-model';
import { CmsContentTypes } from '../../cms/cms-content-types';
import { UserStateModel } from '../../services/user/user-state-model';
import { UserService } from '../../services/user/User.service';
import { GreenCard } from '../../services/greencard/GreenCard.service';

@Component({
  selector: 'app-acct-summary',
  templateUrl: './acct-summary.component.html',
  styleUrls: ['./acct-summary.component.scss']
})
export class AcctSummaryComponent extends UserStateComponent implements OnInit {

  acctSummaryContent: AcctSummaryCmsModel;

  constructor(public cmsService: CMSService, public userService: UserService, private gcService: GreenCard) {
    super(cmsService, userService);
  }

  public cmsUpdated() {
    this.acctSummaryContent = this.cmsService.getCmsComponent(AcctSummaryCmsModel, CmsContentTypes.PageHome);
  }

  public userStateChanged(userState: UserStateModel) {
    this.userState = userState;
  }

  ngOnInit() {
    this.gcService.getCardInfo().subscribe(
      (res) => {
        this.userService.userStateModel.cardInfo = (res as any);
      }
    );
    this.gcService.balance().subscribe(
      (res) => {
        this.userService.userStateModel.balanceInfo = (res as any);
      }
    );
  }
}
