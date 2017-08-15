
import { CmsBaseModel } from 'app/cms/cms-base-model';
import { FaqItemCmsModel } from 'app/components/faq/shared/faq-item/faq-item-cms-model';
import {MetaData} from "../../../cms/shared/meta-data-cms-model";

export class ManagePinCmsModel extends CmsBaseModel {
  pageTitle: string;
  pageDescription: string;
  selectPinHeader: string;
  selectPinDescription: string;
  clearPinHeader: string;
  clearPinDescription: string;
  clearPinButtonLabel: string;
  tipsHeader: string;
  tips: FaqItemCmsModel[];
  metaData: MetaData;

  constructor(json: any) {
    super();
    this.pageTitle = json.pageTitle;
    this.pageDescription = json.pagedescription;
    this.selectPinHeader = json.selectPinHeader;
    this.selectPinDescription = json.selectPinDescription;
    this.clearPinHeader = json.clearPinHeader;
    this.clearPinDescription = json.clearPinDescription;
    this.clearPinButtonLabel = json.clearPinButtonLabel;
    this.tipsHeader = json.tipsHeader;
    this.tips = json.tips.map((jsonFaqItem) => {
            return new FaqItemCmsModel(jsonFaqItem.fields);
        });
    this.metaData = json.metaData.fields;
  }
}
