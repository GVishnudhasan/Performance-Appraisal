import { Component, OnInit } from '@angular/core';
import { MAPImapService } from '../_service/m-apimap.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private mServer: MAPImapService) { }
    name: any;

  obj = {
    name : "",
    email: ""
  }
  ngOnInit(): void {
  }
  
  submit(){
    console.log(this.obj);

    this.mServer.signup(this.obj).subscribe(res => {
      console.log("data >>", res);
    }, err => {
      console.log("error >>",err.error);
    });
  }
}
