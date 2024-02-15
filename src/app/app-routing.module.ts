import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { IncomeComponent } from './components/portfolio/income/income.component';
import { ExpenseComponent } from './components/portfolio/expense/expense.component';
import { LoanComponent } from './components/portfolio/loan/loan.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'income',component:IncomeComponent},
  {path:'expense',component:ExpenseComponent},
  {path:'loan',component:LoanComponent},
  // {path:'wallet',component:WalletComponent},
  // {path:'add-income',component:Add},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
