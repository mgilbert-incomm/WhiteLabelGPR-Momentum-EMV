export class BalanceResponse{
  private _totalCredits: number;
  private _totalDebits:number;
  private _balance:number;
  private _denomination; private _number;
  private _cardStatusId:number;
  private _cardStatusName:string;
  private _zipCode:string;
  private _replacementDetails:string;
  private _activationDate:string;
  private _preAuthBalance:number;


  constructor(totalCredits: number, totalDebits: number, balance: number, denomination, number, cardStatusId: number, cardStatusName: string, zipCode: string, replacementDetails: string, activationDate: string, preAuthBalance: number) {
    this._totalCredits = totalCredits;
    this._totalDebits = totalDebits;
    this._balance = balance;
    this._denomination = denomination;
    this._number = number;
    this._cardStatusId = cardStatusId;
    this._cardStatusName = cardStatusName;
    this._zipCode = zipCode;
    this._replacementDetails = replacementDetails;
    this._activationDate = activationDate;
    this._preAuthBalance = preAuthBalance;
  }

  get totalCredits(): number {
    return this._totalCredits;
  }

  set totalCredits(value: number) {
    this._totalCredits = value;
  }

  get totalDebits(): number {
    return this._totalDebits;
  }

  set totalDebits(value: number) {
    this._totalDebits = value;
  }

  get balance(): number {
    return this._balance;
  }

  set balance(value: number) {
    this._balance = value;
  }

  get denomination() {
    return this._denomination;
  }

  set denomination(value) {
    this._denomination = value;
  }

  get number() {
    return this._number;
  }

  set number(value) {
    this._number = value;
  }

  get cardStatusId(): number {
    return this._cardStatusId;
  }

  set cardStatusId(value: number) {
    this._cardStatusId = value;
  }

  get cardStatusName(): string {
    return this._cardStatusName;
  }

  set cardStatusName(value: string) {
    this._cardStatusName = value;
  }

  get zipCode(): string {
    return this._zipCode;
  }

  set zipCode(value: string) {
    this._zipCode = value;
  }

  get replacementDetails(): string {
    return this._replacementDetails;
  }

  set replacementDetails(value: string) {
    this._replacementDetails = value;
  }

  get activationDate(): string {
    return this._activationDate;
  }

  set activationDate(value: string) {
    this._activationDate = value;
  }

  get preAuthBalance(): number {
    return this._preAuthBalance;
  }

  set preAuthBalance(value: number) {
    this._preAuthBalance = value;
  }
}
