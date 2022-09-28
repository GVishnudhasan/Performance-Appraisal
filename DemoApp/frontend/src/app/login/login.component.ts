import { Component, OnInit } from '@angular/core';
import { MAPImapService } from '../_service/m-apimap.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private mServer: MAPImapService) { }

  email: any;
  password: any;

  ngOnInit(): void {
  }

  login() {
    console.log(this.email, this.password);
    let data = {
      email: this.email,
      password: this.password,
    }
    this.mServer.login(data).subscribe(res => {
      console.log("data >>", res);
    }, err => {
      console.log("error >>",err.error);
    });

  }
}
