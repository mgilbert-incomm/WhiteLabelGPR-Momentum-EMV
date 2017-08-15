
export class ClearPinResponse{
  private _clearPin: boolean;


  get clearPin(): boolean {
    return this._clearPin;
  }

  set clearPin(value: boolean) {
    this._clearPin = value;
  }
}
