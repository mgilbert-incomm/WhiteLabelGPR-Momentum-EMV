import { CmsBaseModel } from 'app/cms/cms-base-model';
import { LinkCmsModel } from 'app/cms/shared/link-cms-model';

export class HeaderCmsModel extends CmsBaseModel {  
  lowerLogo: string;
  programLogo: string;
  mobileLogo: string;
  mobileMenuIcon: string;
  programNames: string[];
  upperHeaderLinks: LinkCmsModel[];
  btmNavigationLinks: LinkCmsModel[];  

    constructor(json: any) {
        super();
        this.lowerLogo = json.lowerLogo.fields.file.url;
        this.programLogo = json.programLogo.fields.file.url;
        this.mobileLogo = json.mobileLogo.fields.file.url;        
        this.mobileMenuIcon = json.mobileMenuIcon.fields.file.url;
        this.programNames = json.programNames;
        this.upperHeaderLinks = json.upperHeaderLinks.map((upperHeaderLink) => {
            return new LinkCmsModel(upperHeaderLink.fields);
        });
        this.btmNavigationLinks = json.lowerHeaderLinks.map((lowerHeaderLink) => {
            return new LinkCmsModel(lowerHeaderLink.fields);
        });
    }
}
