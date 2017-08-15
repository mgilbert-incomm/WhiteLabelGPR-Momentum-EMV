import { CmsBaseModel } from 'app/cms/cms-base-model';

export class LoginFormCmsModel extends CmsBaseModel {
  introText: string;
  cardNumberLabel: string;
  cardNumberInputText: string;
  expirationDateLabel: string;
  monthHintText: string;
  yearHintText: string;
  cvvLabel: string;
  cvvHintText: string;
  signInButtonText: string;
  helpText: string;
  cvvTooltipImage: string;
  cvvTooltipHoverImage: string;

  constructor(json: any) {
    super();
    this.introText = json.introText;
    this.cardNumberLabel = json.cardNumberLabel;
    this.cardNumberInputText = json.cardNumberInputText;
    this.expirationDateLabel = json.expirationDateLabel;
    this.monthHintText = json.monthHintText;
    this.yearHintText = json.yearHintText;
    this.cvvLabel = json.cvvLabel;
    this.cvvHintText = json.cvvHintText;
    this.signInButtonText = json.signInButtonText;
    this.helpText = json.helpText;
    this.cvvTooltipImage = json.cvvTooltipImage.fields.file.url;
    this.cvvTooltipHoverImage = json.cvvTooltipHoverImage.fields.file.url;
  }
}
