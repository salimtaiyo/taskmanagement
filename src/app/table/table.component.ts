import { Component, OnInit, ViewChild } from '@angular/core';
import { Task } from '../task'
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
}) 

export class TableComponent implements OnInit {
  public status:Boolean = true; // invoked from the child component (Update) toggles update child
  public show:Boolean = false; // toggles the quote# in the table

  posts:any;
  Tasklist : Task[];
  public fetchedData:any[]=[];
  sortF; // PRIMENG declaration for sorting

  // invoked from the  child component 
  onNotifyClicked(message:string):void{
    this.status = !this.status;
    this.checkLocalStorage();
  }
  
  constructor(private checkService: ServicesService) {}

  checkLocalStorage(){
    let checkLocalstorage = localStorage.getItem('order');

    if(checkLocalstorage === null){
      this.checkService.getPosts().subscribe(response =>{
        this.posts = response.json();
        localStorage.setItem('order', JSON.stringify(this.posts))
      }, (error: Response) =>{
        alert(error)
      })
    } 
    this.fetchedData = JSON.parse(localStorage.getItem('order'));
  }

  ngOnInit() {
    this.checkLocalStorage();
  }

  // PRIMENG function for sort
  changeSort(event) {
    if (!event.order) {
      this.sortF = 'year';
    } else {
      this.sortF = event.field;
    }
  }   
}

// function c(){
//   localStorage.clear()
// }
// c();