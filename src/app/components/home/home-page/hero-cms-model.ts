import { CmsBaseModel } from 'app/cms/cms-base-model';

export class HeroCmsModel extends CmsBaseModel {

    heroHeaderLabel: string;
    heroImageUrls: string[];
    
    constructor(json: any) {
        super();
        this.heroHeaderLabel = json.heroHeaderLabel;
        this.heroImageUrls = json.heroImages.map((heroImage) => {
            return heroImage.fields.heroImage.fields.file.url;
        });
    }
}
