import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService } from 'src/app/services/common/common.service';
import { ExpenseApiService } from 'src/app/services/expense-api.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss']
})
export class AddExpenseComponent {
  formGroup:FormGroup=new FormGroup({
    amount: new FormControl(),
    category:new FormControl(),
    date:new FormControl(),
    remark:new FormControl()
  });
  data:any={
    category:'',
    date:'',
    amount:'',
    remark:''
  };
  userId:any;
  // date='current date';
  isLoader=false;
  constructor(
    private dialog:MatDialogRef<AddExpenseComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData:any,
    private expenseApi:ExpenseApiService,
    private common:CommonService
  ){
    this.userId=this.dialogData.userId;
  }
  ngOnInit(){
    
  }
  add(){
    this.isLoader=true;
    const wrapper=this.data;
    wrapper.userId=this.userId;
    this.expenseApi.add(wrapper).subscribe((res:any)=>{
      console.log(res);
      this.isLoader=false;
      this.cancel();
      this.common.success("Expense Added Successfully.");
    },err=>{
      this.common.error(err?.message);
      this.isLoader=false;
    });
  }
  cancel(){
    this.dialog.close("Add expense closed!");
  }
}
