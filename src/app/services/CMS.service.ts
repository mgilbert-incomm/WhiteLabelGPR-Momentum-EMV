import {Injectable} from '@angular/core';
import {createClient, EntryCollection} from 'contentful';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {CmsBaseModel} from 'app/cms/cms-base-model';

@Injectable()
export class CMSService {
  cmsChanges: BehaviorSubject<object> = new BehaviorSubject<object>({});
  client: any;
  spaceID: string;
  accessToken: string;
  cmsContent: object;
  cmsContentExpiry: Date;
  location: string;

  setSpace(spaceID) {
    this.spaceID = spaceID;
  }

  setToken(accessToken) {
    this.accessToken = accessToken;
  }

  setLocale(language) {

  }

  getSpecificContent(filterString): Promise<EntryCollection<any>> {
    this.cmsContent = JSON.parse(localStorage.getItem('cms_content'));
    this.cmsContentExpiry = new Date(localStorage.getItem('cms_content_expire_date'));

    if (this.spaceID) {
      this.client = createClient({
        // This is the space ID. A space is like a project folder in Contentful terms
        space: this.spaceID,
        // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
        accessToken: this.accessToken,
      });

      return this.client.getEntries({
        locale: this.location,
        include: 10,
        'sys.contentType.sys.id[match]': filterString
      });
    }
  }

  getContent() {
    this.cmsContent = JSON.parse(localStorage.getItem('cms_content'));
    this.cmsContentExpiry = new Date(localStorage.getItem('cms_content_expire_date'));

    this.getSpecificContent('Page - ').then((space) => this.storeCMSContent(space))
      .catch(() => {
        if (this.cmsContent) {
          this.storeCMSContent(this.cmsContent);
        } else {
          console.log('error');
        }
      });
  }

  storeCMSContent(cmsContent) {
    this.cmsContent = cmsContent;
    this.cmsChanges.next(this.cmsContent);
  }

  getEntriesForContentType(contentType) {
    const cmsdata = this.cmsContent;
    const obj = [];
    if (cmsdata) {
      cmsdata['items'].forEach((itm) => {
        if (itm.sys.contentType.sys.id === contentType) {
          obj.push(itm);
        }
      });
    }
    return obj;
  }

  getCmsContentType(contentTypeId: string): any {
    const json = this.getEntriesForContentType(contentTypeId),
      contentType = json[0];
    return contentType;
  }

// gets ALL data on a Cms Component
  getCmsComponent<T extends CmsBaseModel>(cmsModel: new (json) => T, contentTypeId: string) {
    const cmsContentType = this.getCmsContentType(contentTypeId);
    return cmsContentType ? this.createCmsComponentInstance(cmsModel, cmsContentType.fields) : null;
  }

// gets a specified child Component, ex. gets LoginComponent from PageHome
  getCmsChildComponent<T extends CmsBaseModel>(cmsModel: new (json) => T, contentTypeId: string, componentTypeId: string): T {
    const cmsContentType = this.getCmsContentType(contentTypeId);
    if (cmsContentType && cmsContentType.fields) {
      if (cmsContentType.fields[componentTypeId]) {
        return cmsContentType ? this.createCmsComponentInstance(cmsModel, cmsContentType.fields[componentTypeId].fields) : null;
      } else {
        console.error("Unable to locate CMS Child Component: " + componentTypeId);
        return null;
      }
    }
  }

// calls constructor for Type specified in first constructor
  private createCmsComponentInstance<T extends CmsBaseModel>(cmsModel: new (json) => T, data: any): T {
    return new cmsModel(data);
  }

  constructor() {
    this.accessToken = '3906ffa13577b36200eedf5ec65ba15b212b95ca8508830543edc6b0a234929d';
  }
}
