import { CmsBaseModel } from 'app/cms/cms-base-model';

export class TipBoxCmsModel extends CmsBaseModel {
    tipBoxHeader: string;
    tipBoxDescription: string;
    tipBoxImage: string;    

    constructor(json: any) {
        super();
        this.tipBoxHeader = json.tipBoxHeader;
        this.tipBoxDescription = json.tipBoxDescription;
        this.tipBoxImage = json.tipBoxImage.fields.file.url;
    }
}
