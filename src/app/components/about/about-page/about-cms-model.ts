import {CmsBaseModel} from "../../../cms/cms-base-model";
import {AboutTabCmsModel} from "../about-tab/about-tab-cms-model";

class MetaData{
  title: string;
  description: string;
  keywords: string;

  constructor(json: any){
    this.title = json.title;
    this.description = json.description;
    this.keywords = json.keywords;
  }
}

export class AboutCmsModel extends CmsBaseModel {

  headerText: string;
  subHeaderText: string;
  public tabItems: AboutTabCmsModel[];
  metaData: MetaData;

  constructor(json: any) {
    super();
    console.log("JSON DATA ", json);
    this.headerText = json.headerText;
    this.subHeaderText = json.subHeaderText;

    this.metaData = new MetaData(json.metaData.fields);
    console.log("Meta Data ", this.metaData);
    this.tabItems = json.tabItems.map((jsonTabItem) => {
      return new AboutTabCmsModel(jsonTabItem.fields);
    });

  }
}
