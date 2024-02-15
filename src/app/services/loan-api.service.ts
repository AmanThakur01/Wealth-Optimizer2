import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonConastant } from '../constants/common.constant';

@Injectable({
  providedIn: 'root'
})
export class LoanApiService {

  constructor(
    private http:HttpClient
  ) { }

  getList(uid: any) {
    const url = CommonConastant.baseUrl + '/liability_view/' + uid;
    return this.http.get(url);
  }
  add(loan: any) {
    const url = CommonConastant.baseUrl + '/liability/add';
    return this.http.post(url, loan);
  }
  update(loan:any){
    const url=CommonConastant.baseUrl+'/liability/update';
    return this.http.post(url,loan);
  }
  delete(id:any){
    const url=CommonConastant.baseUrl+'/liability/delete/'+id;
    return this.http.delete(url);
  }
}
