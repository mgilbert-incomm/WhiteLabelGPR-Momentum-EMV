import { CmsBaseModel } from 'app/cms/cms-base-model';

export class AcctMgmtTipItemCmsModel extends CmsBaseModel {
  faqHeader: string;
  faqText: string;

  constructor(json: any) {
    super();
    this.faqHeader = json.faqHeader;
    this.faqText = json.faqText;
  }
}
