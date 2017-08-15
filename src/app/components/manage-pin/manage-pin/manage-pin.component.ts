import { Component, Input, OnInit } from '@angular/core';
import { ManagePinCmsModel } from 'app/components/manage-pin/manage-pin/manage-pin-cms-model';
import {GreenCard} from 'app/services/greencard/GreenCard.service';

@Component({
  selector: "app-manage-pin",
  templateUrl: "./manage-pin.component.html",
  styleUrls: ["./manage-pin.component.scss"]
})
export class ManagePinComponent implements OnInit {
  @Input() managePinCmsModel: ManagePinCmsModel;
  @Input() tabType: string;

  constructor(private gcService: GreenCard) {
    
  }

  ngOnInit() {}

  clearPin() {
    this.gcService.clearPin().subscribe((clearPin) => {
       if (clearPin) {
         // todo remove once we have proper notifications
         alert("request successful!");
       }
      },
      (err) => {
        // todo remove once we have proper notifications
        alert("Error on clear pin! Code: " + err.statusCode);
        if (err.statsuCode === 401) {
          
        }
      });
  }
}
