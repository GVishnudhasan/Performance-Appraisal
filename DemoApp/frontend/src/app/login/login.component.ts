import { Component, OnInit } from '@angular/core';
import { MAPImapService } from '../_service/m-apimap.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { json } from 'express';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private mServer: MAPImapService, private router: Router, private fb: FormBuilder, private toastr: ToastrService) { }

  userForm: FormGroup | any;

  email: any;
  password: any;
  // minmax: any;

  ngOnInit(): void {
    const fb = this.fb;
    this.userForm = fb.group({
      email: fb.control('', [Validators.required, Validators.email, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      password: fb.control('', [Validators.required, Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/)]),
      // minmax: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
    });
  }

  get f() { return this.userForm.controls; }

  login() {
    if (this.userForm.invalid) {
      this.mToastMsg(false, "Error", "please check your credentials.");
      return;
    }
    let a = {'t1': 1, 't2': 0};
    this.mServer.test(a).subscribe(res => {
      console.log("data >>", res);
    }, err => {
      console.log("error >>", err.error);
    });
    
    if (true) {
      this.mToastMsg(true, "success", "login successful.");
      this.router.navigate(['/home']);
    } else {
      let data = {
        email: this.email,
        password: this.password,
      }
      this.mServer.login(data).subscribe(res => {
        console.log("data >>", res);
      }, err => {
        console.log("error >>", err.error);
      });
    }
  }

  // def login():
  //     if userform.invalid:
  //         //success
  //     Return

      
  //     if True:
  //       print success 

  //       Router.navigate(['/home'])
  //     else:
  //       data = {'email':"self.email", 'pw':'self.pw'}
  //       json.dump(data)
  //       mServer.request(data)
  //       mServer
  
  goto() {
    this.router.navigate(['/signup']);
  }

  async mToastMsg(tag: boolean, title: any, message: any) {
    await this.toastr[ (tag) ? 'success' : 'error'](title, message, {
      timeOut: 3000,
    });
  }
}
