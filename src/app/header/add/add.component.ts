import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { log } from 'util';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
 
  submit(data:NgForm):void{ 
    let getData = JSON.parse(localStorage.getItem('order'));
    let addedId = {quoteid: 100, ...data.value};

    let aaa = new Date(data.value.date);
    console.log(aaa.getFullYear());

    // getData.push(data.value);
    // localStorage.setItem('order',JSON.stringify(getData));
    
  }
  constructor() { }

  ngOnInit() {
  }

}
