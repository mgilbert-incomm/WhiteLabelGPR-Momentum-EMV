import { CmsBaseModel } from 'app/cms/cms-base-model';
import { LinkCmsModel } from 'app/cms/shared/link-cms-model';
import { SocialIconCmsModel } from 'app/cms/shared/social-icon-cms-model';

export class FooterCmsModel extends CmsBaseModel {
  backToTop: string;  
  footerCopy: string;
  otherProductsHeader: string;
  copyrightLine: string;
  footerLogo: string;
  footerLinks: LinkCmsModel[];
  footerLegalLinks: LinkCmsModel[];
  otherProductsLinks: LinkCmsModel[];  
  socialIcons: SocialIconCmsModel[];

  constructor(json: any) {
    super();
    this.backToTop = json.backToTop;
    this.footerCopy = json.footerCopy;
    this.otherProductsHeader = json.otherProductsHeader;
    this.copyrightLine = json.copyrightLine;
    this.footerLogo = json.footerLogo.fields.file.url;
    this.footerLinks = json.footerLinks.map((footerLink) => {
            return new LinkCmsModel(footerLink.fields);
        });
    this.footerLegalLinks = json.footerLegalLinks.map((footerLegalLink) => {
            return new LinkCmsModel(footerLegalLink.fields);
        });
    this.otherProductsLinks = json.otherProductsLinks.map((otherProductsLink) => {
            return new LinkCmsModel(otherProductsLink.fields);
        });

    // this.socialIcons = json.socialIcons.map((socialIcon) => {
    //         return new SocialIconCmsModel(socialIcon.fields);
    //     });
  }
}
