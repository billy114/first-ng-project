import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstServiceService {

  private shareData = "default value"
  constructor() { }

  logger (text : string){
    console.log(text);
  }

  getShareData() : string{
    return this.shareData;
  }

  setShareData(value: string){
    this.shareData = value;
  }

}
