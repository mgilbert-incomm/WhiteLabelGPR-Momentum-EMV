import { CmsBaseModel } from 'app/cms/cms-base-model';
import { ContactCmsModel } from 'app/components/faq/faq-page/contact/contact-cms-model';
import { FaqItemCmsModel } from 'app/components/faq/shared/faq-item/faq-item-cms-model';
import {MetaData} from "../../../cms/shared/meta-data-cms-model";

export class FaqCmsModel extends CmsBaseModel {
    headerText: string;
    subHeaderText: string;
    faqItems: FaqItemCmsModel[];
    contactCmsModel: ContactCmsModel;
    metaData: MetaData;

    constructor(json: any) {
        super();
        this.headerText = json.headerText;
        this.subHeaderText = json.subHeaderText;
        this.faqItems = json.faqItems.map((jsonFaqItem) => {
            return new FaqItemCmsModel(jsonFaqItem.fields);
        });
        this.contactCmsModel = new ContactCmsModel(json);
      this.metaData = new MetaData(json.metaData.fields);
    }
}
