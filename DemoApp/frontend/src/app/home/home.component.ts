import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  tag1 = null;

  subObj = [
    {
      name:"lessthan5",
      value:"1"
    },
    {
      name:"morethan5",
      value:"2"
    },
    {
      name:"withPhD",
      value:"3"
    },
    {
      name:"hod-e",
      value:"4"
    },
    {
      name:"hod-snh",
      value:"5"
    },
    {
      name:"director",
      value:"6"
    },
    {
      name:"princi",
      value:"7"
    }
  ]

  ngOnInit(): void {
  }

  set(type:any){
    switch(type){
      case "1":
        this.tag1 = type;
        break;
      case "2":
        this.tag1 = type;
        break;
      case "3":
        this.tag1 = type;
        break;
      default:
        this.tag1 = null;

    }
  }
}
