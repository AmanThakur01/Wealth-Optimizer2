import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  constructor(
   private router:Router
  ){}
  ngOnInit(){

  }
  goToIncome(){
    this.router.navigate(['home'],{
      queryParams:{
        from:'income'
      }
    })
  }

  goToExpense(){
    this.router.navigate(['home'],{
      queryParams:{
        from:'expense'
      }
    })
  }
  goToLoan(){
    this.router.navigate(['home'],{
      queryParams:{
        from:'loan'
      }
    })
  }
  goToWallet(){
    this.router.navigate(['home'],{
      queryParams:{
        from:'wallet'
      }
    })
  }
}
