// todo move to Footer folder if the Footer is the only component that displays social icons

import { CmsBaseModel } from 'app/cms/cms-base-model';

export class SocialIconCmsModel extends CmsBaseModel {
        socialWebsiteUrl: string;
        iconUrl: string;

        constructor(json: any) {
            super();
            this.socialWebsiteUrl = json.url;
            this.iconUrl = json.icon.fields.file.url;
        }
}
