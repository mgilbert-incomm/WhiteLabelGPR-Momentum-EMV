

export class LoginWithLink {
  private _tx_transdata: string;
  private _tx_transdataiv: string;

  public get tx_transdata(): string{
      return this._tx_transdata;
  }
  public set tx_transdata(transdata: string){
    this._tx_transdata = transdata;
  }

  get tx_transdataiv(): string{
    return this._tx_transdataiv;
  }
  set tx_transdataiv(transdataiv: string){
    this._tx_transdataiv = transdataiv;
  }
}
