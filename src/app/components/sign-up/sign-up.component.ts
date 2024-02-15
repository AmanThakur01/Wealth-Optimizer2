import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common/common.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  user:any={
    userName:'',
    password:'',
    name:'',
    phone:'',
    email:''
  };
  formGroup:FormGroup=new FormGroup({
    userName:new FormControl(''),
    password:new FormControl(''),
    name:new FormControl(''),
    phone:new FormControl('',[Validators.pattern('^[0-9]*$'),Validators.required]),
    email:new FormControl('',[Validators.email])
  });
  isLoader=false;
  passType='password';
  show: boolean=false;
  constructor(
    private userService:UserService,
    private common: CommonService,
    public router: Router,
    private dialogRef: MatDialogRef<SignUpComponent>
  ){}
  ngOnInit(){
    console.log("Sign up");
  }
  signup(){
    console.log("signup",this.user);
    this.isLoader=true;
    this.userService.addUser(this.user).subscribe(
      (data:any)=>{
        if(data){
          this.common.success('Signed Up Successfully');
          this.user={};
          this.dialogRef.close();
        }else{
          this.common.error('Sign Up Failed');
        }
        
        this.isLoader=false;
        console.log(data);
      },error=>{
        this.isLoader=false;
        this.common.error('Sign Up Failed');
      });
  }
  cancel(){
    //cancel
    this.dialogRef.close("SignUp closed!");
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
