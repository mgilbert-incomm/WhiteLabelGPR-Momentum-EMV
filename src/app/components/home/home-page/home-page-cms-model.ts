import { CmsBaseModel } from 'app/cms/cms-base-model';
import { HeroCmsModel } from 'app/components/home/home-page/hero-cms-model';
import { TipBoxCmsModel } from 'app/components/home/home-page/tip-box/tip-box-cms-model';
import {MetaData} from "../../../cms/shared/meta-data-cms-model";
export class HomePageCmsModel extends CmsBaseModel {

    heroCmsModel: HeroCmsModel;
    tipBoxCmsModels: TipBoxCmsModel[];
    metaData: MetaData;

    constructor(json: any) {
        super();
        this.heroCmsModel = new HeroCmsModel(json.heroArea.fields);
        this.tipBoxCmsModels = json.tipBoxComponents.map((tipBox) => {
            return new TipBoxCmsModel(tipBox.fields);
        });
      this.metaData = new MetaData(json.metaData.fields);

    }
}
