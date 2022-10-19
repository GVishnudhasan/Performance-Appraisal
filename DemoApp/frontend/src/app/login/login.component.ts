import { getRootDirs } from '@angular/compiler-cli/src/ngtsc/util/src/typescript';
import { Component, OnInit } from '@angular/core';
import { MAPImapService } from '../_service/m-apimap.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private mServer: MAPImapService, private router: Router) { }

  email: any;
  password: any;

  ngOnInit(): void {
  }

  login() {
    if(true){
      this.router.navigate(['/home']);
    }else{
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

  goto() {
    this.router.navigate(['/signup']); 
  }
}
