import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonConastant } from '../constants/common.constant';

@Injectable({
  providedIn: 'root'
})
export class WalletApiService {

  constructor(
    private http:HttpClient
  ) { }

  getList(uid:any){
    const url=CommonConastant.baseUrl+'/wallet_view/'+uid;
    return this.http.get(url);
  }
  add(wallet:any){
    const url=CommonConastant.baseUrl+'/wallet/add';
    return this.http.post(url,wallet);
  }
}