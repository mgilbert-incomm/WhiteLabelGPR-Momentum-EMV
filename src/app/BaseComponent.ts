import {CMSService} from 'app/services/CMS.service';
import {UserService} from 'app/services/user/User.service';
import {UserStateModel} from 'app/services/user/user-state-model';
import {DoCheck, AfterContentInit} from "@angular/core";

export abstract class BaseComponent implements AfterContentInit {
  constructor(public cmsService: CMSService) {
    this.cmsService.cmsChanges.subscribe((value) => this.cmsUpdated());
  }

  ngAfterContentInit(){
    this.cmsUpdated();
  }

  public abstract cmsUpdated();
}

export abstract class UserStateComponent extends BaseComponent {
  public userState: UserStateModel;

  constructor(public cmsService: CMSService, public userService: UserService) {
    super(cmsService);
    this.userService.userStateChanged.subscribe((value) => this.userStateChanged(value));
    this.cmsUpdated();

  }

  public abstract userStateChanged(UserState);
}

/* Not sure of best place to put this */
interface Number {
  toMoney: () => string;
}
Number.prototype['toMoney'] = function (decimals, decimal_sep, thousands_sep) {
  let n: any = this;

  // if decimal is zero we must take it, it means user does not want to show any decimal
  // decimals = isNaN(decimals) ? 2 : Math.abs(decimals);
  decimals = decimals || 0;

  // if no decimal separator is passed we use the dot as default decimal separator (we MUST use a decimal separator)
  decimal_sep = decimal_sep || '.';

  // if you don't want to use a thousands separator you can pass empty string as thousands_sep value
  thousands_sep = thousands_sep || ',';

  let j: number;
  const i: any = parseInt( n = Math.abs(n).toFixed(decimals) , 10) + '';
  const sign = n < 0 ? '-' : '';
  j = (j = i.length) > 3 ? j % 3 : 0;

  return '$' + sign + (j ? i.slice(0, j) + thousands_sep : '') + i.slice(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands_sep) + (decimals ? decimal_sep + Math.abs(n - i).toFixed(decimals).slice(2) : '');
}
