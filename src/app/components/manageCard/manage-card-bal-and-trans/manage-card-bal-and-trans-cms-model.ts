import {CmsBaseModel} from 'app/cms/cms-base-model';
import {FaqItemCmsModel} from 'app/components/faq/shared/faq-item/faq-item-cms-model';
import {LinkCmsModel} from 'app/cms/shared/link-cms-model';

export class BalAndTransCmsModel extends CmsBaseModel {
  tabTitle: string;
  tabType: string;
  balanceSummaryHeader: string;
  activatedLabel: string;
  expirationDateLabel: string;
  originalValueLabel: string;
  purchasesLabel: string;
  totalCreditsLabel: string;
  availableBalanceLabel: string;
  transactionsHeader: string;
  printIcon: string;
  printTransactionsText: string;
  transactionsDescriptionLabel: string;
  transactionsAmountLabel: string;

  constructor(json: any) {
    super();
    this.tabType = "modelBalanceAndTransactions";
    this.tabTitle = json.tabTitle;
    this.balanceSummaryHeader = json.balanceSummaryHeader;
    this.activatedLabel = json.activatedLabel;
    this.expirationDateLabel = json.expirationDateLabel;
    this.originalValueLabel = json.originalValueLabel;
    this.purchasesLabel = json.purchasesLabel;
    this.totalCreditsLabel = json.totalCreditsLabel;
    this.availableBalanceLabel = json.availableBalanceLabel;
    this.transactionsHeader = json.transactionsHeader;
    this.printIcon = json.printIcon ? json.printIcon.fields.file.url : '';
    this.printTransactionsText = json.printTransactionsText;
    this.transactionsDescriptionLabel = json.transactionsDescriptionLabel;
    this.transactionsAmountLabel = json.transactionsAmountLabel;
  }
}
