import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})

// let test = require('../data.json')

export class ServicesService {
  private url:string = '../../assets/data.json';
  constructor(private http:Http) { 

  }
  getPosts(){
    return this.http.get(this.url);   
  }
}
