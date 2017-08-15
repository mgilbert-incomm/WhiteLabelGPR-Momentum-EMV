import { CmsBaseModel } from 'app/cms/cms-base-model';

export class ContactCmsModel extends CmsBaseModel {
        contactUsHeader: string;
        contactUsText: string;
        contactUsImage: string;  

        constructor(json: any) {
        super();
        this.contactUsHeader = json.contactUsHeader;
        this.contactUsText = json.contactUsText;
        this.contactUsImage = json.contactUsImage.fields.file.url;
    }
}
