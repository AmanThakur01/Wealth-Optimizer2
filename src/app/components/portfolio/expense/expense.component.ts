import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from 'src/app/services/common/common.service';
import { ExpenseApiService } from 'src/app/services/expense-api.service';
import { UserService } from 'src/app/services/user/user.service';
import { AddExpenseComponent } from '../add-expense/add-expense.component';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent {
  user:any;
  expense=[];
  colSequence=['srNo','date','amount','remark','menu'];
  isLoader=false;
  constructor(
    private userServ:UserService,
    private common:CommonService,
    private expenseApi:ExpenseApiService,
    private dialog:MatDialog
  ){
    this.user=this.userServ.loggedInUser;
  }
  ngOnInit(){
    this.getExpenseList(this.user?.userId);
  }
  getExpenseList(uid:any){
    this.expenseApi.getList(uid).subscribe((list:any)=>{
      console.log(list);
      if(this.common.hasValue(list)){
        this.expense=list
      }
    },(err)=>{
      this.common.error(err?.message);
    });
  }
  openAddExpense(){
    const addIncome=this.dialog.open(AddExpenseComponent,{
      data:{
        userId:this.user?.userId,
        mode:'add'
      }
    });
    addIncome.afterClosed().subscribe(data=>{
      console.log(data);
      this.getExpenseList(this.user?.userId);
    });
  }
  delete(element:any){
    //delete expense
    console.log(element);
    this.isLoader=true;
    this.expenseApi.delete(element?.expId).subscribe(res=>{
      this.isLoader=false;
      this.common.success("Expense deleted successfully!");
      this.getExpenseList(this.user?.userId);
    },(err)=>{
      this.isLoader=false;
      this.common.error(err.message);
    });
    
  }
  edit(element:any){
    //edit Expense
    console.log(element);
    const editExpense=this.dialog.open(AddExpenseComponent,{
      data:{
        userId:this.user?.userId,
        mode:'edit',
        expense:element
      }
      
    });
    editExpense.afterClosed().subscribe(data=>{
      console.log(data);
      this.getExpenseList(this.user?.userId);
    });
  }
}

