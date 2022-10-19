import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private router: Router) { }

  tag1 = null;

  subObj = [
    {
      name:"Less than Five years",
      link:"/lt5"
    },
    {
      name:"More than Five years",
      link:"/mt5"
    },
    {
      name:"With PHD",
      link:"/withphd"
    },
    {
      name:"HOD/ENGG",
      link:"/hodengg"
    },
    {
      name:"HOD/S&H",
      link:"/hodsnh"
    },
    {
      name:"Director",
      link:"#"
    },
    {
      name:"Principal",
      link:"#"
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
      case "4":
        this.tag1 = type;
        break;
      case "5":
        this.tag1 = type;
        break;
      case "6":
        this.tag1 = type;
        break;
      case "7":
        this.tag1 = type;
        break;
      default:
        this.tag1 = null;

    }
  }

  goto(path:any) {
    this.router.navigate([path]); 
  }
}
