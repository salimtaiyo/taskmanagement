import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  update(id){
    // debugger;
    console.log(id.quoteid)
    // let getData = JSON.parse(localStorage.getItem('order'));
    // getData.splice(id,1);
    // localStorage.setItem('order', JSON.stringify(getData));
    // this.checkLocalStorage();
  }

}
