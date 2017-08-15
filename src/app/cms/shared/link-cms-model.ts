import { CmsBaseModel } from 'app/cms/cms-base-model';

export class LinkCmsModel extends CmsBaseModel {
  entryTitle: string;
  linkDisplay: string;
  linkName: string;
  linkUrl: string;
  linkVisibility: string;
  linkTarget: string;

  constructor(json: any) {
      super();
      this.entryTitle = json.entryTitle;
      this.linkDisplay = json.linkDisplay;
      this.linkName = json.linkName;
      this.linkUrl = json.linkUrl;
      this.linkVisibility = json.linkVisibility;
      this.linkTarget = json.linkTarget;
  }
}
