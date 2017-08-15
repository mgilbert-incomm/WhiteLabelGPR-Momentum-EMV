import {CmsBaseModel} from 'app/cms/cms-base-model';
import {FaqItemCmsModel} from 'app/components/faq/shared/faq-item/faq-item-cms-model';
import {LinkCmsModel} from 'app/cms/shared/link-cms-model';

export class AssignZipCmsModel extends CmsBaseModel {
  tabTitle: string;
  tabType: string;
  assignZipCodeLabel: string;
  assignZipCodeDescription: string;
  zipCodeLabel: string;
  zipCodeEditLinkText: string;
  zipCodeLinkText: string;
  zipCodeSaveText: string;

  constructor(json: any) {
    super();
    this.tabType = 'modelAssignZip';
    this.tabTitle = json.tabTitle;
    this.zipCodeEditLinkText = json.zipCodeEditLinkText;
    this.assignZipCodeLabel = json.assignZipCodeLabel;
    this.assignZipCodeDescription = json.assignZipCodeDescription;
    this.zipCodeLabel = json.zipCodeLabel;
    this.zipCodeLinkText = json.zipCodeLinkText;
    this.zipCodeSaveText = json.zipCodeSaveText;
  }
}
