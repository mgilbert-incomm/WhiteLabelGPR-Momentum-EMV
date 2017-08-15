import { CmsBaseModel } from 'app/cms/cms-base-model';

export class PdfCmsModel extends CmsBaseModel {
    pdfLinkText: string;
    pdfLinkUrl: string;    


    constructor(json: any) {
        super();
        this.pdfLinkText = json.pdfLinkText;
        this.pdfLinkUrl = json.pdfFile.fields.file.url;
    }
}
