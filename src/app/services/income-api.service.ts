import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonConastant } from '../constants/common.constant';

@Injectable({
  providedIn: 'root'
})
export class IncomeApiService {

  constructor(
    private http:HttpClient
  ) { }

  getList(uid:any){
    const url=CommonConastant.baseUrl+'/income_view/'+uid;
    return this.http.get(url);
  }
  add(income:any){
    const url=CommonConastant.baseUrl+'/income/add';
    return this.http.post(url,income);
  }
  update(income:any){
    const url=CommonConastant.baseUrl+'/income/update';
    return this.http.post(url,income);
  }
  delete(id:any){
    const url=CommonConastant.baseUrl+'/income/delete/'+id;
    return this.http.delete(url);
  }
}
