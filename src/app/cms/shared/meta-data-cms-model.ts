export class MetaData{
  title: string;
  description: string;
  keywords: string;

  constructor(json: any){
    this.title = json.title;
    this.description = json.description;
    this.keywords = json.keywords;
  }
}
