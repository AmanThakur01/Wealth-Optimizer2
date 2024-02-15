import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from 'src/app/services/common/common.service';
import { UserService } from 'src/app/services/user/user.service';
import { AddLoanComponent } from '../add-loan/add-loan.component';
import { LoanApiService } from 'src/app/services/loan-api.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss']
})
export class LoanComponent {
  user:any;
  loan=[];
  colSequence=['srNo','category', 'start_date', 'principle', 'emi', 'no_of_emi', 'net_loan_amt', 'laps_emi','remark'];
  isLoader=false;
  constructor(
    private userServ:UserService,
    private common:CommonService,
    private loanApi:LoanApiService,
    private dialog:MatDialog
  ){
    this.user=this.userServ.loggedInUser;
  }
  ngOnInit(){
    this.getLoanList(this.user?.userId);
  }
  getLoanList(uid:any){
    this.loanApi.getList(uid).subscribe((list:any)=>{
      console.log(list);
      if(this.common.hasValue(list)){
        this.loan=list
      }
    },(err)=>{
      this.common.error(err?.message);
    });
  }
  openAddLoan(){
    const addLoan=this.dialog.open(AddLoanComponent,{
      data:{
        userId:this.user?.uid,
        mode:'add'
      }
    });
    addLoan.afterClosed().subscribe(data=>{
      console.log(data);
      this.getLoanList(this.user?.userId);
    });
  }
  delete(element:any){
    //delete income
    console.log(element);
    this.isLoader=true;
    this.loanApi.delete(element?.loanId).subscribe(res=>{
      this.isLoader=false;
      this.common.success("Loan deleted successfully!");
      this.getLoanList(this.user?.userId);
    },(err)=>{
      this.isLoader=false;
      this.common.error(err.message);
    });
    
  }
  edit(element:any){
    //edit loan
    console.log(element);
    const editLoan=this.dialog.open(AddLoanComponent,{
      data:{
        userId:this.user?.userId,
        mode:'edit',
        loan:element
      }
      
    });
    editLoan.afterClosed().subscribe(data=>{
      console.log(data);
      this.getLoanList(this.user?.userId);
    });
  }
}
