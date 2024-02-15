import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from 'src/app/services/common/common.service';
import { IncomeApiService } from 'src/app/services/income-api.service';
import { UserService } from 'src/app/services/user/user.service';
import { AddIncomeComponent } from '../add-income/add-income.component';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent {
  user:any;
  incomes=[];
  colSequence=['srNo','source','amount','menu'];
  isLoader=false;
  constructor(
    private userServ:UserService,
    private common:CommonService,
    private incomeApi:IncomeApiService,
    private dialog:MatDialog
  ){
    this.user=this.userServ.loggedInUser;
  }
  ngOnInit(){
    this.getIncomeList(this.user?.userId);
  }
  getIncomeList(uid:any){
    this.incomeApi.getList(uid).subscribe((list:any)=>{
      console.log(list);
      if(this.common.hasValue(list)){
        this.incomes=list
      }
    },(err)=>{
      this.common.error(err?.message);
    });
  }
  openAddIncome(){
    const addIncome=this.dialog.open(AddIncomeComponent,{
      data:{
        userId:this.user?.userId,
        mode:'add'
      }
    });
    addIncome.afterClosed().subscribe(data=>{
      console.log(data);
      this.getIncomeList(this.user?.userId);
    });
  }
  delete(element:any){
    //delete income
    console.log(element);
    this.isLoader=true;
    this.incomeApi.delete(element?.incId).subscribe(res=>{
      this.isLoader=false;
      this.common.success("Income deleted successfully!");
      this.getIncomeList(this.user?.userId);
    },(err)=>{
      this.isLoader=false;
      this.common.error(err.message);
    });
    
  }
  edit(element:any){
    //edit income
    console.log(element);
    const editIncome=this.dialog.open(AddIncomeComponent,{
      data:{
        userId:this.user?.userId,
        mode:'edit',
        income:element
      }
      
    });
    editIncome.afterClosed().subscribe(data=>{
      console.log(data);
      this.getIncomeList(this.user?.userId);
    });
  }
}
