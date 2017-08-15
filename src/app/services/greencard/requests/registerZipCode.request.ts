export class RegisterZipCodeRequest{
  private zipCode: string;
  // TODO: Need to find way of handling multiple regions/countries
  private country = 'US';

  constructor(countryZipCode: string) {
    this.zipCode = countryZipCode;
  }

  get countryZipCode(): string {
    return this.zipCode;
  }

  set countryZipCode(value: string) {
    this.zipCode = value;
  }
}
