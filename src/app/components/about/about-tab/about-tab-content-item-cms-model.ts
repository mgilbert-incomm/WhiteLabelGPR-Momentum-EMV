import {CmsBaseModel} from "../../../cms/cms-base-model";

export class GroupedItems{

  public fieldEntry: string;
  public icon: string;
  public text: string;

  constructor(json: any){
    this.fieldEntry = json.fieldEntry;
    this.icon = (json.icon && json.icon.fields.file.url)||undefined;
    this.text = json.text;
  }
}
export class TabContentItemCmsModel extends CmsBaseModel{

  public fieldEntry: string;
  public icon: string;
  public text: string;
  public groupName: string;
  public groupedItems: Array<Object>;
  constructor(json: any) {
    super();
    this.fieldEntry = json.fieldEntry;

    this.groupName = json.groupName || undefined;
    this.icon = (json.icon && json.icon.fields.file.url)||undefined;
    this.text = json.text;

    if(json.groupedItems) {
      this.groupedItems = json.groupedItems.map((groupedItem) => {
        return new GroupedItems(groupedItem.fields);
      });
    }

  }
}
