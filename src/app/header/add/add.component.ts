import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {
 
  constructor() { }

  submit(data:NgForm):void{ 
    let getData = JSON.parse(localStorage.getItem('order'));
    let parsedDate = new Date(data.value.fullDate);
     
    let year = parsedDate.getFullYear();
    let month = parsedDate.getMonth();
    let day = parsedDate.getDay();
    let hrs = parsedDate.getHours();
    let mins = parsedDate.getMinutes();

    let date = `${month < 10? "0" + month: month}/${day <10 ? "0" + day: day}/${year} ${hrs<10? "0"+ hrs: hrs}-${mins<10?"0"+mins:mins}`;

    let addedId = { quoteid: getData.length, dueday: date, ...data.value };
    getData.push(addedId);
    localStorage.setItem('order', JSON.stringify(getData));
  }
  

  ngOnInit() {
  }

}
