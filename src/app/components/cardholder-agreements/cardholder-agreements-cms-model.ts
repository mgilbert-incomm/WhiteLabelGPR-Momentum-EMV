import { CmsBaseModel } from 'app/cms/cms-base-model';
import { PdfCmsModel } from 'app/cms/shared/pdf-cms-model';

export class CardholderAgreementsCmsModel extends CmsBaseModel {
    cardholderAgreementsHeader: string;
    cardholderAgreementsSubheader: string;
    pdfLinks: PdfCmsModel[];
    pdfImageUrl: string;

    constructor(json: any) {
        super();
        this.cardholderAgreementsHeader = json.cardholderAgreementsHeader;
        this.cardholderAgreementsSubheader = json.cardholderAgreementsSubheader;
        this.pdfImageUrl = json.pdfImage.fields.file.url;
        this.pdfLinks = json.pdfLinks.map((pdfLink) => {
            return new PdfCmsModel(pdfLink.fields);
        });
    }
}
