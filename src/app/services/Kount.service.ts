import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, URLSearchParams } from '@angular/http';

@Injectable()
export class KountService {

  // TODO: Pull data from contentful or backend service.
  clientURL = 'https://sandbox02.kaxsdc.com/collect/sdk';
  merchantId = '109713';
  win: any = window;
  private merchantSessionId: string;
  private readonly maxAttemps = 5;
  private attemptCount = 0;

  constructor(private http: Http) {
    this.getClientScriptAndSaveMercSessionId();
  }
  getMerchantSessionId() {
    return this.merchantSessionId;
  }
  private getClientScriptAndSaveMercSessionId() {
    if (this.attemptCount < this.maxAttemps) {
      this.attemptCount++;
    } else {
      return;
    }
    if (!this.merchantSessionId) {
      const requestOptions: RequestOptions = new RequestOptions();
      requestOptions.params = new URLSearchParams();
      requestOptions.params.set('m', this.merchantId);
      return this.http.get(this.clientURL, requestOptions).subscribe(
        (response: Response) => {
          this.win.response = response;
          this.win.eval(response.text());
          const kountAccessClient: any = new this.win.ka.ClientSDK();
          kountAccessClient.setupCallback({
            'collect-begin': (params: { MercSessId: string, MerchantId: string }) => {
              this.merchantSessionId = params.MercSessId;
            }
          });
          kountAccessClient.collectData();
        },
        (error: Response) => {
          setTimeout(() => {
            this.getClientScriptAndSaveMercSessionId();

          // Each failed call will wait one additional second before next attempt compared to previous attempt
          // up to maxAttempts.  Assumption is that it will take user some time to type in the card number.
          }, 1000 * this.attemptCount + 1000);
          console.log(error);
        }
      );
    } else {
      console.log('Merchant session id already obtained.', this.merchantSessionId);
    }
  }
}
