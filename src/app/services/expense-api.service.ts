import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonConastant } from '../constants/common.constant';
@Injectable({
  providedIn: 'root'
})
export class ExpenseApiService {

  constructor(
    private http: HttpClient
  ) {}
  getList(uid: any) {
    const url = CommonConastant.baseUrl + '/expense_view/' + uid;
    return this.http.get(url);
  }
  add(expense: any) {
    const url = CommonConastant.baseUrl + '/expense/add';
    return this.http.post(url, expense);
  }
  update(expense:any){
    const url=CommonConastant.baseUrl+'/expense/update';
    return this.http.post(url,expense);
  }
  delete(id:any){
    const url=CommonConastant.baseUrl+'/expense/delete/'+id;
    return this.http.delete(url);
  }
}
