import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common/common.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  currentComp='';
  constructor(
    private userSer:UserService,
    private common: CommonService,
    private route: ActivatedRoute
  ){
    this.route.queryParams?.subscribe((data:any)=>{
      console.log(data);
      if(this.common.hasValue(data)){
        this.currentComp=data.from;
      
      }
    });
  }
  ngOnInit(){

  }
  get isUserLoggedIn(){
    return this.common.hasValue(this.userSer.loggedInUser?.userId);
  }

}
