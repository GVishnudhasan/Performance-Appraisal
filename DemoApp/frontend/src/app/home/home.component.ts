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
      link:"#"
    },
    {
      name:"More than Five years",
      link:"#"
    },
    {
      name:"With PHD",
      link:"#"
    },
    {
      name:"HOD/ENGG",
      link:"#"
    },
    {
      name:"HOD/S&H",
      link:"#"
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
      default:
        this.tag1 = null;

    }
  }

  goto(path:any) {
    this.router.navigate([path]); 
  }
}
