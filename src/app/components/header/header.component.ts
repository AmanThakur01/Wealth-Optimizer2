import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common/common.service';
import { UserService } from 'src/app/services/user/user.service';
import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private common: CommonService,
    private userSer: UserService
  ){}
  ngOnInit(){

  }

  goToHome(){
    this.router.navigate(['home']);
  }
  signIn(){
    //Open login modal window
    const dialog=this.dialog.open(LoginComponent,{
      data:{}
    });
    dialog.afterClosed().subscribe(data=>{
      console.log(data);
    });
  }
  signUp(){
    //Open register modal window
    const dialog=this.dialog.open(SignUpComponent,{
      data:{},
      width:"600px"
    });
    dialog.afterClosed().subscribe(data=>{
      console.log(data);
    });
  }
  get isUserLoggedIn(){
    return this.common.hasValue(this.userSer.loggedInUser?.userId);
  }
  logOut(){
    this.userSer.loggedInUser=null;
    this.common.success("Logged Out Successfully!");
    this.router.navigate(['/home']);
  }
}
