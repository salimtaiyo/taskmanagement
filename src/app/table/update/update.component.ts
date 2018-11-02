import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  // public su:Boolean = false;
  status:any;
  quoteid:number;
  quotetype:string;
  quotenumber:number;
  tasktype:string;
  taskdescription:string;
  quote:string;
  dueday:any;
  contactname:string;

  constructor() { }

  ngOnInit() {
  }

  // invoked from the parent componenet (table.component.html line: 29)
  update(data){
    // debugger;
    console.log('run');
    this.status = data.status;
    this.quoteid = data.quoteid;
    this.quotetype  = data.quotetype;
    this.quotenumber = data.quotenumber;
    this.taskdescription = data.taskdescription;
    this.quote = data.quote;
    this.dueday = data.dueday;
    this.contactname = data.contactname;
    this.tasktype = data.tasktype;
    // console.log(data)
    
  }

  // on update press in the UPDATE FORM
  updateData(data){
    let fetchLocalStorage = localStorage.getItem('order');
    console.log(data.value)
    console.log(fetchLocalStorage)
    // let updateData = {quoteData}
  }
}
