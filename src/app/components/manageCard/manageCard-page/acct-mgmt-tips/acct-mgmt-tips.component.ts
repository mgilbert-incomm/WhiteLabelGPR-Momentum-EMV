import { Component } from '@angular/core';
import { CMSService } from 'app/services/CMS.service';
import { AcctMgmtTipsCmsModel } from './acct-mgmt-tips-model';
import { BaseComponent } from 'app/BaseComponent';
import {CmsContentTypes} from 'app/cms/cms-content-types';

@Component({
  selector: 'app-acct-mgmt-tips',
  templateUrl: './acct-mgmt-tips.component.html',
  styleUrls: ['./acct-mgmt-tips.component.css']
})
export class AcctMgmtTipsComponent extends BaseComponent {

  private acctMgmtTipsContent: AcctMgmtTipsCmsModel;

  constructor(public cmsService: CMSService) {
    super(cmsService);
  }

  public cmsUpdated() {
    this.acctMgmtTipsContent = this.cmsService.getCmsComponent(AcctMgmtTipsCmsModel, CmsContentTypes.PageManageCard);
  }


  public isEmpty(): boolean {
    if (this.acctMgmtTipsContent
      && this.acctMgmtTipsContent.cardTips
      && this.acctMgmtTipsContent.cardTips.length === 0) {
      return true;
    } else {
      return false;
    }
  }

}
