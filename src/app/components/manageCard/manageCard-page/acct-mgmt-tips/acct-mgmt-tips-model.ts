import {CmsBaseModel} from "../../../../cms/cms-base-model";
import {AcctMgmtTipItemCmsModel} from "./acct-mgmt-tips-item/acct-mgmt-tip-model";

export class AcctMgmtTipsCmsModel extends CmsBaseModel {
  headerText: string;
  cardTips: AcctMgmtTipItemCmsModel[];

  constructor(json: any) {
    super();
    if (json && json.manageCardSection && json.manageCardSection.fields) {
      const manageCardSection = json.manageCardSection.fields;
      this.headerText = manageCardSection.cardTipsLabel;
      if (manageCardSection.cardTips) {
        this.cardTips = manageCardSection.cardTips.map((jsonFaqItem) => {
          return new AcctMgmtTipItemCmsModel(jsonFaqItem.fields);
        });
      }
    }
  }
}

