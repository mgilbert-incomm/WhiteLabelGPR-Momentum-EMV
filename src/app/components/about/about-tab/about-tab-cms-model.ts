import {CmsBaseModel} from "../../../cms/cms-base-model";
import {TabContentItemCmsModel} from "./about-tab-content-item-cms-model";
export class AboutTabCmsModel extends CmsBaseModel{

  public tabText: string;
  public tabContentItems: TabContentItemCmsModel[];
  public additionalCssClasses: string;

  constructor(json: any) {
    super();
    this.tabText = json.tabText;
    this.additionalCssClasses = json.additionalCssClasses || undefined;
    this.tabContentItems = json.tabContentItems.map((jsonContentItem) => {
      return  new TabContentItemCmsModel(jsonContentItem.fields);
    });
  }
}
