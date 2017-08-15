import {Component, Input, OnInit} from '@angular/core';
import { AcctMgmtTipItemCmsModel } from './acct-mgmt-tip-model';

@Component({
  selector: 'app-acct-mgmt-tips-item',
  templateUrl: './acct-mgmt-tips-item.component.html',
  styleUrls: ['./acct-mgmt-tips-item.component.css']
})
export class AcctMgmtTipsItemComponent implements OnInit {

  private isCollapsed: boolean;
  @Input() tipItem: AcctMgmtTipItemCmsModel;

  constructor() { }

  ngOnInit() {
    this.isCollapsed = true;
  }

  public toggleAndGetIsCollapsed(): boolean {
    this.toggleIsCollapsed();
    return this.isCollapsed;
  }

  public toggleIsCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  public getIsCollapsed(): boolean {
    return this.isCollapsed;
  }
}
