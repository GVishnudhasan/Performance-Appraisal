import { Component, OnInit } from "@angular/core";
import { MAPImapService } from "../_service/m-apimap.service";
import { Router } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  FormArray,
} from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { json } from "express";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(
    private mServer: MAPImapService,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {}

  userForm: FormGroup | any;

  facultyid: any;
  password: any;

  ngOnInit(): void {
    const fb = this.fb;
    this.userForm = fb.group({
      facultyid: fb.control("", [
        Validators.required,
        Validators.pattern(/(?=.*[a-z])(?=.*[0-9]).{8,}/),
      ]),
      password: fb.control("", [
        Validators.required,
        Validators.pattern(
          /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
        ),
      ]),
    });
  }

  get f() {
    return this.userForm.controls;
  }

  login() {
    if (this.userForm.invalid) {
      this.mToastMsg(false, "Error", "please check your credentials.");
      return;
    }
    this.mServer.login(this.userForm.value).subscribe(
      (res) => {
        console.log("data >>", res);
        this.mToastMsg(true, "Success", "login successful.");
        this.router.navigate(["/home"]);
      },
      (err) => {
        console.log("error >>", err.error);
        this.mToastMsg(false, "Incorrect ID or Password", "Login failed.");
      }
    );
  }

  goto() {
    this.router.navigate(["/signup"]);
  }

  gotoreset() {
    this.router.navigate(["/request-reset-password"]);
  }

  async mToastMsg(tag: boolean, title: any, message: any) {
    await this.toastr[tag ? "success" : "error"](title, message, {
      timeOut: 3000,
    });
  }
}
