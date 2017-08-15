
import {CmsBaseModel} from "../../cms/cms-base-model";
import {MetaData} from "../../cms/shared/meta-data-cms-model";

export class AboutVanillaCards{

  public entryTitle: string;
  public productDescription: string;
  public productUrl: string;
  public title: string;
  public vanillaProductHeader: string;
  public vanillaProductImage: string;

  constructor(json: any){
    this.entryTitle = json.entryTitle;
    this.productDescription = json.productDescription;
    this.productUrl = json.productUrl;
    this.title = json.title;
    this.vanillaProductHeader = json.vanillaProductHeader;
    this.vanillaProductImage= (json.vanillaProductImage && json.vanillaProductImage.fields.file.url)||undefined;
  }

}
export class AboutVanillaCmsModel extends CmsBaseModel{

  public entryTitle: string;
  public aboutVanillaHeader: string;
  public aboutCards: {};
  public metaData: MetaData;

  constructor(json: any) {
    super();
    this.entryTitle = json.entryTitle;
    this.aboutVanillaHeader = json.aboutVanillaHeader;
    this.aboutCards = json.aboutCards.map((jsonTabItem) => {
      return new AboutVanillaCards(jsonTabItem.fields);
    });
    this.metaData = new MetaData(json.metaData.fields);


  }
}
