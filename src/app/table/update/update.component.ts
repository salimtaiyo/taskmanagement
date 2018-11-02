import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent implements OnInit {

  @Output() notify:EventEmitter<string> = new EventEmitter<string>();

  onClick():void{
    this.notify.emit()
  }


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
    let fetchLocalStorage = JSON.parse(localStorage.getItem('order'));

    // parsing the date to the proper MM/DD/YYYY HH/MM format
    let parsedDate = new Date(data.value.fullDate);
    let year = parsedDate.getFullYear();
    let month = parsedDate.getMonth();
    let day = parsedDate.getDay();
    let hrs = parsedDate.getHours();
    let mins = parsedDate.getMinutes();

    let date = `${month < 10? "0" + month: month}/${day <10 ? "0" + day: day}/${year} ${hrs<10? "0"+ hrs: hrs}-${mins<10?"0"+mins:mins}`;

    // getting the index of the selected row
    let index = fetchLocalStorage.findIndex(i => i.quotenumber === data.value.quotenumber);
    // adding all the necessary datas to a variable 
    let updatedValue = { quoteid: index +1, ...data.value, dueday: date};

    fetchLocalStorage.splice(index,1,updatedValue );

    localStorage.setItem('order', JSON.stringify(fetchLocalStorage))
  }
}
