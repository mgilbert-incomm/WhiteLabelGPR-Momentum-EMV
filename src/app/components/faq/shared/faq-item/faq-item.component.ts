import { Component, Input, OnInit } from '@angular/core';
import { FaqItemCmsModel } from './faq-item-cms-model';

@Component({
  selector: 'app-faq-item',
  templateUrl: './faq-item.component.html',
  styleUrls: ['./faq-item.component.css']
})
export class FaqItemComponent implements OnInit {
  @Input() faqItem: FaqItemCmsModel;

  public isCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

  public toggleIsCollapsed() {
      this.isCollapsed = !this.isCollapsed;
  }

}
