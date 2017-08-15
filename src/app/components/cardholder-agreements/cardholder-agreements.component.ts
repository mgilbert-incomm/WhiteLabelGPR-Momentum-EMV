import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'app/BaseComponent';
import { CMSService } from 'app/services/CMS.service';
import { CardholderAgreementsCmsModel } from 'app/components/cardholder-agreements/cardholder-agreements-cms-model';
import { CmsContentTypes } from 'app/cms/cms-content-types';

@Component({
  selector: 'app-cardholder-agreements',
  templateUrl: './cardholder-agreements.component.html',
  styleUrls: ['./cardholder-agreements.component.scss']
})
export class CardholderAgreementsComponent extends BaseComponent implements OnInit {
  
    cardholderAgreementsCmsModel: CardholderAgreementsCmsModel;

    public cmsUpdated() {
      this.cardholderAgreementsCmsModel = this.cmsService.getCmsComponent(CardholderAgreementsCmsModel, CmsContentTypes.PageCardholderAgreements);    
  }

  constructor(cmsService: CMSService) {
    super(cmsService);
  }

  ngOnInit() {}
}
