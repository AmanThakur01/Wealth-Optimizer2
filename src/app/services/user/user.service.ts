import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonConastant } from 'src/app/constants/common.constant';
// import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  loggedInUser:any={
    userName:'',
    password:'',
    name:'',
    phone:'',
    email:'',
    userId:null,
    loginStatus:null,
    role:null,
    profile:null
  };
  constructor(
    private http:HttpClient,
  ) { }

  public addUser(user:any){
    let url=CommonConastant.baseUrl+'/user/add';//Spring project url PostMapping
    return this.http.post(url,user);
  }
  public login(creds:any){
    let url=CommonConastant.baseUrl+'/login-action?userName='+creds.userName+'&password='+creds.password;
    return this.http.post(url,null);
  }
  public update(user:any){
    const url=CommonConastant.baseUrl+'/user/update';
    return this.http.post(url,user);
  }
 
}
