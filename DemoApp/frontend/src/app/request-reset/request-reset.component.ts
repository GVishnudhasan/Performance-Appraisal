import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { MAPImapService } from "../_service/m-apimap.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-request-reset",
  templateUrl: "./request-reset.component.html",
  styleUrls: ["./request-reset.component.scss"],
})
export class RequestResetComponent implements OnInit {
  constructor(
    private mServer: MAPImapService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private router: Router
    ) {}

  RequestResetForm: FormGroup | any;
  forbiddenEmails: any;
  errorMessage: string = '';
  successMessage: string = '';
  IsvalidForm = true;

  ngOnInit(): void {
    const fb = this.fb;
    this.RequestResetForm = new FormGroup({
      email: fb.control("", [
        Validators.required,
        Validators.email,
        Validators.pattern(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ),
      ]),
    });
  }

  get f() {
    return this.RequestResetForm.controls;
  }

  RequestResetUser(){

    if (this.RequestResetForm.invalid) {
      this.mToastMsg(false, "Error", "please check your credentials.");
      return;
    }

    this.mServer.requestReset(this.RequestResetForm.value).subscribe(
      (res) => {
        this.RequestResetForm.reset();
        console.log("data >>", res);
        this.successMessage = "Reset link has been sent to your email.";
        this.router.navigate(["/request-reset-password"]);
      },
      (err) => {
        console.log("error >>", err);
        this.errorMessage = "Error in sending reset link.";
      }
    );
  }

  async mToastMsg(tag: boolean, title: any, message: any) {
    await this.toastr[tag ? "success" : "error"](title, message, {
      timeOut: 3000,
    });
  }

}
