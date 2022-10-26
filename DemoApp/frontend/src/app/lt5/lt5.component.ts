import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lt5',
  templateUrl: './lt5.component.html',
  styleUrls: ['./lt5.component.scss']
})
export class Lt5Component implements OnInit {

  constructor() { }




  categoryList = {
    g1 : {
      qty_of_class :{
        os1:0,
        os2:0,
        es1:0,
        es2:0,
        sum: 0,
        overall_total:20
      },
      qb:{
        os1:0,
        os2:0,
        es1:0,
        es2:0,
        sum: 0,
        overall_total:10
      },
      rf_book:{
        os1:0,
        os2:0,
        es1:0,
        es2:0,
        sum: 0,
        overall_total:10
    }
  }}

  ngOnInit(): void {
  }

  async setmap(){
    await this.opt_data();
    console.log(this.categoryList);
  }

  async opt_data(){
    this.categoryList.g1.qty_of_class.sum =  this.categoryList.g1.qty_of_class.os1 +  this.categoryList.g1.qty_of_class.os2 +  this.categoryList.g1.qty_of_class.es1 +  this.categoryList.g1.qty_of_class.es2;
  }

}