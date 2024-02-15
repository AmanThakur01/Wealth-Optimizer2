import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
// import { ConfirmationComponent } from 'src/app/components/utility/confirmation/confirmation.component';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(
    private snackbar:MatSnackBar,
    // private dialog:MatDialog,
    private http:HttpClient
  ) { }
  public success(msg:string){
    this.snackbar.open(msg,'',{duration:3000,verticalPosition:'top',horizontalPosition:'right'});
  }
  public error(msg:string){
    this.snackbar.open(msg,'',{duration:3000,verticalPosition:'top',horizontalPosition:'right'});
  }
  public hasValue(value:any){
    return !(value===null || value==='' || value === undefined );
  }
  public topNews='https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=db3e603cc1004bdf928404c3b63a0e8c';
  public topHeadlines(): Observable<any>{
    return this.http.get(this.topNews);
  }
  // public confirmation(title:string,message:string,iconName:string,action:string){
  //   //open confirmation component
  //   return this.dialog.open(ConfirmationComponent,{
  //     data:{
  //       title:title,
  //       message:message,
  //       iconName:iconName,
  //       action:action
  //     },
  //     hasBackdrop:false
  //   });
  // }
}
