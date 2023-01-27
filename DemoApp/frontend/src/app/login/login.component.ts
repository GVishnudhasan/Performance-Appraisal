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

  facultyid: any;
  password: any;

  ngOnInit(): void {
    const fb = this.fb;
    this.userForm = fb.group({
      facultyid: fb.control('', [Validators.required, Validators.pattern(/(?=.*[a-z])(?=.*[0-9]).{8,}/)]),
      password: fb.control('', [Validators.required, Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/)]),
    });
  }

  get f() { return this.userForm.controls; }

  login() {
    if (this.userForm.invalid) {
      this.mToastMsg(false, "Error", "please check your credentials.");
      return;
    }
    let data = {
      facultyid: this.facultyid,
      password: this.password,
    }
    this.mServer.login(data).subscribe(res => {
      console.log("data >>", res);
    }, err => {
      console.log("error >>", err.error);
    });
    
    if (true) {
      this.mToastMsg(true, "success", "login successful.");
      this.router.navigate(['/home']);
    } else {
      // let data = {
      //   facultyid: this.facultyid,
      //   password: this.password,
      // }
      // this.mServer.login(data).subscribe(res => {
      //   console.log("data >>", res);
      // }, err => {
      //   console.log("error >>", err.error);
      // });
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
