import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService } from 'src/app/services/common/common.service';
import { IncomeApiService } from 'src/app/services/income-api.service';

@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.component.html',
  styleUrls: ['./add-income.component.scss']
})
export class AddIncomeComponent {
  formGroup:FormGroup=new FormGroup({
    source: new FormControl(),
    amount: new FormControl()
  });
  data:any={
    source:'',
    amount:''
  };
  userId:any;
  role='Active';
  isLoader=false;
  mode='add';
  constructor(
    private dialog:MatDialogRef<AddIncomeComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData:any,
    private incomeApi:IncomeApiService,
    private common:CommonService
  ){
    this.userId=this.dialogData.userId;
    if(this.dialogData?.mode==='edit'){
      this.mode='edit';
      this.data=this.dialogData.income;
    }
  }
  ngOnInit(){
    
  }
  add(){
    this.isLoader=true;
    const wrapper=this.data;
    wrapper.role=this.role;
    wrapper.userId=this.userId;
    this.incomeApi.add(wrapper).subscribe((res:any)=>{
      console.log(res);
      this.isLoader=false;
      this.common.success("Income added successfully!");
      this.cancel();
    },(err)=>{
      this.common.error(err?.message);
      this.isLoader=false
    });
  }
  edit(){
    this.isLoader=true;
    const wrapper=this.data;
    wrapper.role=this.role;
    wrapper.userId=this.userId;
    this.incomeApi.update(wrapper).subscribe((res:any)=>{
      console.log(res);
      this.isLoader=false;
      this.common.success("Income updated successfully!");
      this.cancel();
    },(err)=>{
      this.common.error(err?.message);
      this.isLoader=false
    });
  }
  cancel(){
    this.dialog.close("Add income closed");
  }
}
