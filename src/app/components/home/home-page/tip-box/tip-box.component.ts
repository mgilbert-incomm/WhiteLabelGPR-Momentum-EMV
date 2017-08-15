import { Component, Input, OnInit } from '@angular/core';

import { TipBoxCmsModel } from 'app/components/home/home-page/tip-box/tip-box-cms-model';

@Component({
  selector: 'app-tip-box',
  templateUrl: './tip-box.component.html',
  styleUrls: ['./tip-box.component.scss']
})
export class TipBoxComponent implements OnInit {
  @Input() tipBoxCmsModel: TipBoxCmsModel;

  constructor() { }

  ngOnInit() { }

}
