

import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { LoginWithLink } from './requests/loginWithLink.request';
import { TransactionHistory } from './responses/transactionhistory.response';
import { LoginRequest } from './requests/login.request';
import { BalanceResponse } from './responses/balance.response';
import { RegisterZipCodeRequest } from './requests/registerZipCode.request';
import { ClearPinResponse } from './responses/clearPin.response';
import { GetZipCodeResponse } from './responses/getZipCode.response';
import { NotificationService } from '../notification/Notification.service';
import { KountService } from '../Kount.service';
import {UserService} from "../user/User.service";

@Injectable()
export class GreenCard {

  private GATEWAY_PATH = 'https://dev01-mobileservices.incomm.com/api/3.0/';

  private LOGIN_PATH = 'authenticate';
  private LOGIN_WITH_LINK_PATH = 'loginDetails';
  private TRANSACTION_HISTORY_PATH = 'account/getTransactionHistory';
  private CLEAR_PIN_PATH = 'account/clearPin';
  private BALANCE_PATH = 'account/getBalance';
  private REGISTER_ZIPCODE_PATH = 'account/registerZipCodePost';
  private CARD_IMAGE_FRONT = 'account/getVirtualcardImage?virtualcardParam=FRONT';
  private CARD_IMAGE_BACK = 'account/getVirtualcardImage?virtualcardParam=BACK';
  private GET_ZIPCODE_PATH = 'account/getZipCode';
  private readonly GET_CARD_INFO_PATH = 'account/getCardInfo';
  private REFRESH_SESSION_PATH = 'refresh';
  private LOGOUT_PATH = 'logout';
  private SESSION_ID_NAME = 'x-auth-token';
  private BEARER_TOKEN = '1181476a-4138-350a-8947-2889832a4b67';
  private readonly KOUNT_SESSION_ID_HEADER = 'x-kount-session-id';

  constructor(private _http: Http, private notificationService: NotificationService, private kountService: KountService, private userService: UserService) { }

  /** Get Front card image
   * @returns {Observable<R|T>}
   */
  getCardImageFront(): Observable<boolean> {
    return this._http.get(this.GATEWAY_PATH + this.CARD_IMAGE_FRONT, this.getRequestOptions())
      .map( (res: Response) => {
        return res;
      })
      .catch(this.handleError.bind(this));
  }

  /** Get Front card image
   * @returns {Observable<R|T>}
   */
  getCardImageBack(): Observable<boolean> {
    return this._http.get(this.GATEWAY_PATH + this.CARD_IMAGE_BACK, this.getRequestOptions())
      .map( (res: Response) => {
        return res;
      })
      .catch(this.handleError.bind(this));
  }

  /**
   * Login with Card
   * @param loginRequest
   * @returns {Observable<R|T>}
   */

  login(loginRequest: LoginRequest): Observable<boolean> {
    const merchantSessionId = this.kountService.getMerchantSessionId();
    const requestOptions: RequestOptions = this.getRequestOptions();
    requestOptions.headers.set(this.KOUNT_SESSION_ID_HEADER, merchantSessionId);

    return this._http.post(this.GATEWAY_PATH + this.LOGIN_PATH, JSON.stringify(loginRequest), requestOptions)
      .map( (res: Response) => {
         const sessionID = res.headers.get(this.SESSION_ID_NAME);
         if (sessionID) {
           this.setCookie(sessionID);
           return true;
         }

         return false;
      })
      .catch(this.handleError.bind(this));

  }

  /**
   * Logout of GreenCard
   * @returns {Observable<R|T>}
   */
  logout(): Observable<any> {
    return this._http.get(this.GATEWAY_PATH + this.LOGOUT_PATH, this.getRequestOptions())
        .map( (res: Response) => {

        })
        .catch(this.handleError.bind(this));
  }

  /**
   * Refresh Session Id
   */
  refreshSession() {
    this._http.get(this.GATEWAY_PATH + this.REFRESH_SESSION_PATH, this.getRequestOptions())
        .catch(this.handleError.bind(this));
  }

  /**
   * Get ZipCode
   */
  getZipCode(): Observable<GetZipCodeResponse> {
    return this._http.get(this.GATEWAY_PATH + this.GET_ZIPCODE_PATH, this.getRequestOptions())
        .map( (res => res.json()) )
        .catch(this.handleError.bind(this));
  }
  /**
   * Login using encrypted link params
   * @param loginWithLinkRequest
   * @returns {Subscription}
   */
  loginWithLink(loginWithLinkRequest: LoginWithLink): Observable<boolean> {

    const params: URLSearchParams = new URLSearchParams();
    params.set('tx_transdata', loginWithLinkRequest.tx_transdata);
    params.set('tx_transdataiv', loginWithLinkRequest.tx_transdataiv);

    /* */
    return this._http.get(this.GATEWAY_PATH + this.LOGIN_WITH_LINK_PATH, {
      search: params
    }).map( (res: Response) => {
      const sessionID = res.headers.get(this.SESSION_ID_NAME);

      if (sessionID) {
        this.setCookie(sessionID);
        return true;
      }

      return false;
    })
      .catch(this.handleError.bind(this));


  }

  /**
   * Get account balance for logged in user
   */
  balance(): Observable<BalanceResponse> {
    return this._http.get(this.GATEWAY_PATH + this.BALANCE_PATH, this.getRequestOptions())
      .map( (res => res.json()))
      .catch(this.handleError.bind(this));
  }

  /**
   * Clear pin
   */
  clearPin(): Observable<ClearPinResponse> {
    return this._http.get(this.GATEWAY_PATH + this.CLEAR_PIN_PATH, this.getRequestOptions())
      .map( (res => res.json()))
      .catch(this.handleError.bind(this));
  }


  /**
   * Register ZipCode
   * @param registerZipCodeRequest
   * @returns {Observable<R|T>}
   */
  registerZipCode(registerZipCodeRequest: RegisterZipCodeRequest): Observable<any> {

    return this._http.post(this.GATEWAY_PATH + this.REGISTER_ZIPCODE_PATH, JSON.stringify(registerZipCodeRequest), this.getRequestOptions())
      .map( (res => res.json()))
      .catch(this.handleError.bind(this));

  }


  /**
   * Get transaction history for logged in user
   * @returns {Observable<R|T>}
   */
  transactionHistory(): Observable<TransactionHistory[]> {
    return this._http.get(this.GATEWAY_PATH + this.TRANSACTION_HISTORY_PATH, this.getRequestOptions())
      .map( (res => res.json()))
      .catch(this.handleError.bind(this));
  }

  getCardInfo(): Observable<object> {
    return this._http.get(this.GATEWAY_PATH + this.GET_CARD_INFO_PATH, this.getRequestOptions())
      .map( (res) => res.json())
      .catch(this.handleError.bind(this));
  }





  private extractData(res: Response) {
    const body = res.json();
    console.log('Body Data = ' + body.data);
    return body || [];
  }


  private handleError (error: Response | any) {
    console.log('An error occured on request ', error);
    if (error.status === 401) {
      if(this.userService.userStateModel.loggedIn) {
        this.userService.logout();
      }
    }

    let message = error.json();


    const errObj = {
      responseCode: null,
      respMessage: '',
    };
    let errMsg: string;


    if (error instanceof Response) {
      errObj.responseCode = error;
      const body = error.json() || '';
      const error_message_key =  body.respCode;
      console.log("ERROR KEY ", error_message_key);

      this.notificationService.error(error_message_key, false);


      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    errObj.respMessage = errMsg;
    console.error(errMsg);

    return Observable.throw(errObj);
  }



  private getRequestOptions(contentType: string = null) {
    const headers = new Headers({
      'Content-Type': contentType ? contentType : 'application/json',
      'Accept': '*/*',
      'Authorization': 'Bearer ' + this.BEARER_TOKEN,
    });

    const sessionValue = this.getCookie(this.SESSION_ID_NAME);
    if (sessionValue) {
      headers.append(this.SESSION_ID_NAME, this.getCookie(this.SESSION_ID_NAME));
    }

    return new RequestOptions({headers: headers, withCredentials: true});
  }

  /**
   * Sets the sessionID inside a cookie
   * @param sessionID
   */
  private setCookie(sessionID: string) {
    document.cookie = this.SESSION_ID_NAME + '=' + sessionID;
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






