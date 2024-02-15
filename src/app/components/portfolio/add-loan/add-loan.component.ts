import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService } from 'src/app/services/common/common.service';
import { LoanApiService } from 'src/app/services/loan-api.service';

@Component({
  selector: 'app-add-loan',
  templateUrl: './add-loan.component.html',
  styleUrls: ['./add-loan.component.scss']
})
export class AddLoanComponent {
  formGroup:FormGroup=new FormGroup({
    category:new FormControl(),
    start_date:new FormControl(),
    principle:new FormControl(),
    emi:new FormControl(),
    no_of_emi:new FormControl(),
    net_loan_amt:new FormControl(),
    laps_emi:new FormControl(),
    remark:new FormControl()
  });
  data:any={
    // 'category', 'start_date', 'principle', 'emi', 'no_of_emi', 'net_loan_amt', 'laps_emi'
    category:'',
    start_date:'',
    principle:'',
    emi:'',
    no_of_emi:'',
    net_loan_amt:'',
    laps_emi:'',
    remark:''
  };
  userId:any;
  // role='Active';
  isLoader=false;
  mode='add';
  constructor(
    private dialog:MatDialogRef<AddLoanComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData:any,
    private loanApi:LoanApiService,
    private common:CommonService
  ){
    this.userId=this.dialogData.userId;
    if(this.dialogData?.mode==='edit'){
      this.mode='edit';
      this.data=this.dialogData.loan;
    }
  }
  ngOnInit(){
    
  }
  add(){
    this.isLoader=true;
    const wrapper=this.data;
    // wrapper.role=this.role;
    wrapper.userId=this.userId;
    this.loanApi.add(wrapper).subscribe((res:any)=>{
      console.log(res);
      this.isLoader=false;
      this.common.success("Loan added successfully!");
      this.cancel();
    },(err)=>{
      this.common.error(err?.message);
      this.isLoader=false
    });
  }
  edit(){
    this.isLoader=true;
    const wrapper=this.data;
    // wrapper.role=this.role;
    wrapper.userId=this.userId;
    this.loanApi.update(wrapper).subscribe((res:any)=>{
      console.log(res);
      this.isLoader=false;
      this.common.success("Loan updated successfully!");
      this.cancel();
    },(err)=>{
      this.common.error(err?.message);
      this.isLoader=false
    });
  }
  cancel(){
    this.dialog.close("Add Loan closed");
  }
}
