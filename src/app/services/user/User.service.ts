import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {DocumentRef} from 'app/services/DocumentRef';
import { UserStateModel } from 'app/services/user/user-state-model';
import {Router} from "@angular/router";


/* userState structure
 * loggedIn: booolean // State of whether currently logged in.
 * balanceInfo object // Balance information retrieved from GC Service
 * transactionHistory: object // Transaction history
 */


@Injectable()
export class UserService {
  userStateChanged: BehaviorSubject<object> = new BehaviorSubject<object>({});
  userStateModel: UserStateModel;

  constructor(private docRef: DocumentRef, private router: Router) {
    this.userStateModel = new UserStateModel();
    if (this.getCookie('x-auth-token') !== '') {
      this.changeLoginStatus(true);
    } else {
      this.changeLoginStatus(false);
    }
  }

  changeUserState(userState) {
    this.userStateModel = userState;
    this.userStateChanged.next(this.userStateModel);
  }

  changeLoginStatus(loginState) {
    this.userStateModel.loggedIn = loginState;
    this.userStateChanged.next(this.userStateModel);
  }
  changeBalanceInfo(balanceInfo) {
    this.userStateModel.balanceInfo = balanceInfo;
    this.userStateChanged.next(this.userStateModel);
  }
  changeTransactionHistory(txnHistory) {
    this.userStateModel.transactionHistory = txnHistory;
    this.userStateChanged.next(this.userStateModel);
  }
  changeZipCode(zip) {
    this.userStateModel.zipCode = zip;
    this.userStateChanged.next(this.userStateModel);
  }

  changeCardInfo(cardInfo) {
    this.userStateModel.cardInfo = cardInfo;
    this.userStateChanged.next(this.userStateModel);
  }

  logout() {
    this.changeUserState({loggedIn: false, balanceInfo: null, transactionHistory: null, cardInfo: null});
    this.deleteCookie();
    this.router.navigate(['/home']);
  }

  private setCookie(sessionID: string) {
    document.cookie = 'x-auth-token=' + sessionID;
  }
  private deleteCookie() {
    document.cookie = 'x-auth-token="";expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }
  private getCookie(cookieName: string): string {
    const cookieArray = document.cookie.split(';');

    for (let i = 0; i < cookieArray.length; ++i) {
      if (cookieArray[i].trim().match('^' + cookieName + '=')) {
        return cookieArray[i].replace(`${cookieName}=`, '').trim();
      }
    }
    return '';
  }

}
