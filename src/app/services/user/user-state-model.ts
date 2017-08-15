export class UserStateModel {
  public loggedIn: boolean;
  public cardInfo: {
    cardNumber: string,
    cvv: string,
    expMonth: string,
    expYear: string
  }
  public balanceInfo: {
    totalCredits: number,
    totalDebits: number,
    balance: number,
    denomination: number,
    cardStatusId: number,
    cardStatusName: string,
    zipCode: string,
    replacementDetails: object,
    activationDate: string,
    preAuthBalance: number
  };
  public zipCode: string;
  public transactionHistory: {
    pendingTransactions: object[];
    postedTransactions: object[];
  };
};
