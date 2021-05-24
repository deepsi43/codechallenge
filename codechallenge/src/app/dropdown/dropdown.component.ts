import { Component, OnInit } from '@angular/core';
import {Companies} from './companies';
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  constructor() { }
companies:Companies[];
  ngOnInit() {
    this.companies =[
      {
        Id:1,
        Name:"Alex"
      },
      {
        Id:2,Name:"Harry",
        
      },
    {
      Id:3,
    Name:"Mike"
    },
    {Id:4,
    Name:"Christy"}
    
    ]
    
    }
  }


