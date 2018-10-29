import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public fetchedData:any[]=[];
  constructor() {}

  ngOnInit() {
    
  }

  createData(){
    let api:any[] = [];
    let checkLocalstorage = localStorage.getItem('order');
    if(checkLocalstorage === null){
        for(let i =1; i<=50;i++){
            api.push({
                quoteid: i,
                status : "open", 
                quotetype : "BF",
                quotenumber : "777", 
                tasktype : "Follow-up",
                name : "shaoshao", 
                duetime: {
                  hour: "21",
                  min: "07"
                },
                dueday:{
                  year:"2017",
                  month:"07",
                  day:"07"
                },
                taskdescription: ["zzzzz"]
            })
        }
        localStorage.setItem('order', JSON.stringify(api))
    }
    this.fetchedData = JSON.parse(localStorage.getItem('order'));
  }

}
