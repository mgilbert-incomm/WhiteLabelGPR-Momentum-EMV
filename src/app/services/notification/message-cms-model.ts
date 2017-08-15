
import {CmsBaseModel} from "../../cms/cms-base-model";


class ErrorMessage{
  code: string;
  message: string;

  constructor(json: any){

    this.code = json.code;
    this.message = json.message;
  }
}

class SuccessMessage{
  code: string;
  message: string;

  constructor(json: any){

    this.code = json.code;
    this.message = json.message;
  }
}
export class MessageCmsModel extends CmsBaseModel{
entryTitle: string;
entryName: string;
errorMessages: ErrorMessage[];
successMessages: SuccessMessage[];

  constructor(json: any) {
    super();
    this.entryName = json.entryName;
    this.errorMessages = json.errorMessages;


    this.errorMessages = json.errorMessages.map((ErrorItem) => {
      return new ErrorMessage(ErrorItem.fields);
    });

    this.successMessages = json.successMessages.map((SuccessItem) => {
      return new SuccessMessage(SuccessItem.fields);
    });

  }
}
