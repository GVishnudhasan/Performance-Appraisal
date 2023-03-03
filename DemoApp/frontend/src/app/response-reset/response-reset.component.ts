import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { MAPImapService } from "../_service/m-apimap.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-response-reset",
  templateUrl: "./response-reset.component.html",
  styleUrls: ["./response-reset.component.scss"],
})
export class ResponseResetComponent implements OnInit {
  constructor(
    private mServer: MAPImapService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ResponseResetForm: FormGroup | any;
  errorMessage: string = "";
  successMessage: string = "";
  resetToken: null = null;
  CurrentState: any;
  IsResetFormValid = true;

  ngOnInit(): void {
    const fb = this.fb;
    this.ResponseResetForm = this.fb.group({
      resettoken: [this.resetToken],
      newPassword: fb.control("", [
        Validators.required,
        Validators.pattern(
          /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
        ),
      ]),
      confirmPassword: fb.control("", [
        Validators.required,
        Validators.pattern(
          /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
        ),
      ]),
    });
  }

  get f() {
    return this.ResponseResetForm.controls;
  }

  VerifyToken() {
    this.mServer.ValidPasswordToken({ resettoken: this.resetToken }).subscribe(
      (data) => {
        this.CurrentState = "Verified";
      },
      (err) => {
        this.CurrentState = "NotVerified";
      }
    );
  }

  Validate(passwordFormGroup: FormGroup) {
    const new_password = passwordFormGroup.controls.newPassword.value;
    const confirm_password = passwordFormGroup.controls.confirmPassword.value;

    if (confirm_password.length <= 0) {
      return null;
    }

    if (confirm_password !== new_password) {
      return {
        doesNotMatch: true,
      };
    }

    return null;
  }

  ResetPassword() {
    if (this.ResponseResetForm.invalid) {
      this.mToastMsg(false, "Error", "please check your credentials.");
      return;
    }

    this.mServer.newPassword(this.ResponseResetForm.value).subscribe(
      (res) => {
        this.ResponseResetForm.reset();
        console.log("data >>", res);
        this.successMessage = "Password has been reset successfully.";
        this.router.navigate(["/login"]);
      },
      (err) => {
        console.log("error >>", err);
        this.errorMessage = "Error in resetting password.";
      }
    );
  }

  async mToastMsg(tag: boolean, title: any, message: any) {
    await this.toastr[tag ? "success" : "error"](title, message, {
      timeOut: 3000,
    });
  }
}
