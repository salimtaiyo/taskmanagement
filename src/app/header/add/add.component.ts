import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {
 
  constructor() { }

  // submit(data:NgForm):void{ 
  //   let getData = JSON.parse(localStorage.getItem('order'));
  //   // let parsedDate = new Date(data.value.fullDate);
     
  //   // let year = parsedDate.getFullYear();
  //   // let month = parsedDate.getMonth();
  //   // let day = parsedDate.getDay();
  
  //   let addedId = {quoteid: getData.length + 1, 
  //     // date: {
  //     //   year: year, 
  //     //   month: month,
  //     //   day: day
  //     // }, 
  //   ...data.value};

  //   getData.push(addedId);

  //   localStorage.setItem('order', JSON.stringify(getData));

  // }
  

  ngOnInit() {
  }

}
