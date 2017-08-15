import {Component, OnInit, HostListener, ViewChild} from '@angular/core';
import {BaseComponent} from 'app/BaseComponent';
import {CMSService} from 'app/services/CMS.service';

@Component({
  selector: 'footer-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent extends BaseComponent {
  /* CMS Related Properties */
  footerNewsletter: object = null;

  constructor(cmsService: CMSService) {
      super(cmsService);
  }

  /* Called when content is retrieved from CMS */
  cmsUpdated() {
    const obj = this.cmsService.getEntriesForContentType('pageFooter');
    if (obj) {
      for (const entry of obj) {
        for (const fld in entry.fields) {
          if (entry.fields.hasOwnProperty(fld)) {
            this[fld] = entry.fields[fld];
          }
        }
      }
    }
  }
}
