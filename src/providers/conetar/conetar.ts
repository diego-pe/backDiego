import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ConetarProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConetarProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ConetarProvider Provider');
  }
  
  traerListPer(numero){
      return this.http.get("http://randomuser.me/api/?results"+);
  }

}
