import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common/common.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  formGroup:FormGroup=new FormGroup({
    userName: new FormControl(),
    password: new FormControl()
  });
  cred:any={
    userName:'',
    password:''
  }
  isLoader=false;
  passType='password';
  show: boolean=false;
  constructor(
    private router: Router,
    private uService:UserService,
    private common:CommonService,
    private dialogRef: MatDialogRef<LoginComponent>
  ){}

  ngOnInit(){

  }
  login(){
    this.isLoader=true;
    this.uService.login(this.cred).subscribe((user:any)=>{
      if(this.common.hasValue(user)){
        sessionStorage.setItem('loggedInUser',JSON.stringify(user));
        this.uService.loggedInUser=user;
        this.common.success("Logged in successfully!");
        // if(user.role===1){
        //   //navigate to admin
        //   this.router.navigate(['/admin']);
        // }else if(user.role===2){
        //   //navigate to user
        //   this.router.navigate(['/user']);
        // }

        /**Navigate to user dashboard */
        this.cancel();
        this.router.navigate(['home']);
        
      }
      this.isLoader=false;
  },error=>{
    if(error?.error?.message){
      this.common.error(error.error.message);
    }else{
      this.common.error("Login Failed!");
    }
    this.isLoader=false;
  });
  }
  cancel(){
    //cancel
    this.dialogRef.close("Login Closed!");
  }
  showPass(){
    this.passType='text';
    this.show=true;
  }
  hidePass(){
    this.passType='password';
    this.show=false
  }

}
