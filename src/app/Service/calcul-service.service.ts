import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculServiceService {
  constructor() { }
  getNumberOf(list:any[], critiria:string, value:any){

    let Num: number = 0 ;
    for (let i in list) {
      // tslint:disable-next-line:triple-equals
      if (list[i][critiria] == value) {
        Num++;
      }
    }
    return Num ;



  }

}
