import { Component, OnInit } from '@angular/core';
import { Task } from '../task'
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
}) 


export class TableComponent implements OnInit {
  posts:any;
  Tasklist : Task[];
  public fetchedData:any[]=[];
  constructor(private service: ServicesService) {}

  delete(d){
    console.log(d)
  }
  checkLocalStorage(){
    let checkLocalstorage = localStorage.getItem('order');

    if(checkLocalstorage === null){
      this.service.getPosts().subscribe(response =>{
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
      
}

// function c(){
//   localStorage.clear()
// }
// c();