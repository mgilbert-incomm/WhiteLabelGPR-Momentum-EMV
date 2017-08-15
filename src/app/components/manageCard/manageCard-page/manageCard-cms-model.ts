import { CmsBaseModel } from 'app/cms/cms-base-model';
import { FaqItemCmsModel } from 'app/components/faq/shared/faq-item/faq-item-cms-model';
import { LinkCmsModel } from 'app/cms/shared/link-cms-model';
import { BalAndTransCmsModel } from 'app/components/manageCard/manage-card-bal-and-trans/manage-card-bal-and-trans-cms-model';
import { AssignZipCmsModel } from 'app/components/manageCard/manage-card-assign-zip/manage-card-assign-zip-cms-model';

export class ManageCardCmsModel extends CmsBaseModel {
    headerText: string;
    availableBalanceLabel: string;
    virtualAccountNumberLabel: string;
    expirationDateLabel: string;
    statusLabel: string;
    // Left as object because it can be of 3 different types currently,
    // and there is no way to dynamically handle these at this time.
    tabComponents: object[];
    cardTipsLabel: string;
    mobileSubNavigationLogo: string;
    cardTips: FaqItemCmsModel[];

    constructor(json: any) {
        super();
        this.headerText = json.headerText;
        this.availableBalanceLabel = json.availableBalanceLabel;
        this.virtualAccountNumberLabel = json.virtualAccountNumberLabel;
        this.expirationDateLabel = json.expirationDateLabel;
        this.statusLabel = json.statusLabel;
        this.mobileSubNavigationLogo = json.mobileSubNavigationLogo ? json.mobileSubNavigationLogo.fields.file.url : null;
        this.tabComponents = json.tabComponents.map((tab) => {
                switch (tab['sys']['contentType']['sys']['id']) {
                  case 'modelBalanceAndTransactions':
                    return {type: tab.sys.contentType.sys.id, fields: new BalAndTransCmsModel(tab ? tab.fields : null)};
                  case 'modelAssignZip':
                    return {type: tab.sys.contentType.sys.id, fields: new AssignZipCmsModel(tab ? tab.fields : null)};
                  default:
                    return {type: tab.sys.contentType.sys.id, fields: tab ? tab.fields : null};
                }
        });
        this.cardTipsLabel = json.cardTipsLabel;
        this.cardTips = json.cardTips.map((jsonCardTip) => {
            return new FaqItemCmsModel(jsonCardTip.fields);
        });
    }
}
export class ManageVirtualCardPrintSectionCmsModel extends CmsBaseModel {
  entryName: string;
  headerImage: string;
  headerText: string;
  virtualCardImage: string;
  description: string;
  virtualAccountNumberLabel: string;
  expirationDateLabel: string;
  cvvLabel: string;
  cardActivityLabel: string;
  footerImage: string;

  constructor(json: any) {
    super();
    this.entryName = json.entryName;
    this.headerImage = json.headerImage ? json.headerImage.fields.file.url : '';
    this.headerText = json.headerText;
    this.virtualCardImage = json.virtualCardImage ? json.virtualCardImage.fields.file.url : '';
    this.description = json.description;
    this.virtualAccountNumberLabel = json.virtualAccountNumberLabel;
    this.expirationDateLabel = json.expirationDateLabel;
    this.cardActivityLabel = json.cardActivityLabel;
    this.footerImage = json.footerImage ? json.footerImage.fields.file.url : '';
    this.cvvLabel = json.cvvLabel;
  }
}
export class ManageVirtualCardCmsModel extends CmsBaseModel {
  headerText: string;
  printText: string;
  printIcon: string;
  flipCardIcon: string;
  flipCardTextFront: string;
  flipCardTextBack: string;
  howToUseHeaderText: string;
  howToUseItems: string[];
  howToUseLinks: LinkCmsModel[];
  printSection: ManageVirtualCardPrintSectionCmsModel;

  constructor(json: any) {
    super();
    this.headerText = json.headerText;
    this.printText = json.printText;
    this.flipCardIcon = json.flipCardIcon.fields.file.url;
    this.flipCardTextFront = json.flipCardTextFront;
    this.flipCardTextBack = json.flipCardTextBack;
    this.howToUseHeaderText = json.howToUseHeaderText;
    this.howToUseItems = json.howToUseItems;
    this.printIcon = json.printIcon.fields.file.url;
    this.howToUseLinks = json.howToUseLinks.map((jsonHTULink) => {
      return new LinkCmsModel(jsonHTULink.fields);
    });
    this.printSection = json.printSection;
  }
}
export class ManageCardPageCmsModel extends CmsBaseModel {
  manageVirtualCardComponent: ManageVirtualCardCmsModel;
  manageCardSection: ManageCardCmsModel;

  constructor(json: any) {
    super();
    this.manageVirtualCardComponent = json.manageVirtualCardComponent;
    this.manageCardSection = json.manageCardSection;
  }
}
