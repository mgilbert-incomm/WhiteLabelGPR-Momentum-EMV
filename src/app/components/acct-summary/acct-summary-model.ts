import { CmsBaseModel } from '../../cms/cms-base-model';
/**
 * Created by mkhokhar on 8/2/17.
 */

export class AcctSummaryCmsModel extends CmsBaseModel {

  topLabel: string;
  accountNumberLabel: string;
  availableBalanceLabel: string;
  originalValueLabel: string;
  purchasesLabel: string;
  activatedLabel: string;
  expirationDateLabel: string;
  checkAnotherBalanceLabel: string;

  constructor(json: any) {
    super();
    this.topLabel = json.accountSummaryComponent.fields.topLabel;
    this.accountNumberLabel = json.accountSummaryComponent.fields.accountNumberLabel;
    this.availableBalanceLabel = json.accountSummaryComponent.fields.availableBalanceLabel;
    this.originalValueLabel = json.accountSummaryComponent.fields.originalValueLabel;
    this.purchasesLabel = json.accountSummaryComponent.fields.purchasesLabel;
    this.activatedLabel = json.accountSummaryComponent.fields.activatedLabel;
    this.expirationDateLabel = json.accountSummaryComponent.fields.expirationDateLabel;
    this.checkAnotherBalanceLabel = json.accountSummaryComponent.fields.checkAnotherBalanceLinkLabel;
  }

}
