

export class LoginRequest {

  cardNumber: string;
  cvv: string;
  expMonth: string;
  expYear: string;

  constructor(cardNumber: string, cvv: string, expMonth: string, expYear: string) {

    this.cardNumber = cardNumber;
    this.cvv = cvv;
    this.expMonth = expMonth;
    this.expYear = expYear;
  }
}
