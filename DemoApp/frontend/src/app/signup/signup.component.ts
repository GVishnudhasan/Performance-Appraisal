import { Component, OnInit } from '@angular/core';
import { MAPImapService } from '../_service/m-apimap.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


  RegisterStudent(studentForm: NgForm): void {   
    console.log(studentForm.value);
  }

  Branches: any[] = [
    { id: 1, name: 'CSE' },
    { id: 2, name: 'EEE' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Mechanical' },
    { id: 5, name: 'ECE' },
    { id: 6, name: 'BME' }
  ];

  Designations: any[] = [
    { id: 1, name: 'Assistant Professor' },
    { id: 2, name: 'Associate Professor' },
    { id: 3, name: 'Head of the Department' },
    { id: 4, name: 'Director' },
    { id: 5, name: 'Principal' }
  ];

  form: FormGroup | any;
  submitted = false;

  constructor(private mServer: MAPImapService, private router: Router, private fb: FormBuilder, private toastr: ToastrService) { }
    name: any;
    userForm: FormGroup | any;

    email: any;
    password: any;
    facultyid: any;
    totalexperience: any;
    mobileno: any;


  ngOnInit(): void {
    const fb = this.fb;
    this.userForm = fb.group({
      email: fb.control('', [Validators.required, Validators.email, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      facultyid: fb.control('', [Validators.required]),
      name: fb.control('', [Validators.required]),
      totalexperience: fb.control('', [Validators.required]),
      mobileno: fb.control('', [Validators.required]),
      password: fb.control('', [Validators.required, Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/)]),
      confirmPassword: ['', Validators.required],
    });
  }
  
  get f() { return this.userForm.controls; }

  login() {
    if (this.userForm.invalid) {
      this.mToastMsg(false, "Error", "please check your credentials.");
      return;
    }

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

  goto() {
    this.router.navigate(['/signup']);
  }

  async mToastMsg(tag: boolean, title: any, message: any) {
    await this.toastr[ (tag) ? 'success' : 'error'](title, message, {
      timeOut: 3000,
    });
  }
}