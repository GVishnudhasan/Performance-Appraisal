import { Component, OnInit } from "@angular/core";
import { MAPImapService } from "../_service/m-apimap.service";
import { Router } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  NgForm,
} from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  RegisterStudent(studentForm: NgForm): void {
    console.log(studentForm.value);
  }
  selectedBranch: string = "";
  selectedDesignation: string = "";

  // Branches: any[] = [
  //   { id: 1, name: "CSE" },
  //   { id: 2, name: "EEE" },
  //   { id: 3, name: "IT" },
  //   { id: 4, name: "Mech" },
  //   { id: 5, name: "ECE" },
  //   { id: 6, name: "BME" },
  // ];
  Branches: any[] = ["CSE", "EEE", "IT", "Mech", "ECE", "BME"];

  // Designations: any[] = [
  //   { id: 1, name: "Assistant Professor" },
  //   { id: 2, name: "Associate Professor" },
  //   { id: 3, name: "Head of the Department" },
  //   { id: 4, name: "Director" },
  //   { id: 5, name: "Principal" },
  // ];
  Designations: any[] = [
    "Assistant Professor",
    "Associate Professor",
    "Head of the Department",
    "Director",
    "Principal",
  ];

  form: FormGroup | any;
  submitted = false;

  constructor(
    private mServer: MAPImapService,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {}
  userForm: FormGroup | any;
  facultyid: any;
  name: any;
  branch: any;
  designation: any;
  totalexperience: any;
  dateOfBirth: Date | undefined;
  dateOfJoining: Date | undefined;
  mobileno: any;
  email: any;
  password: any;

  ngOnInit(): void {
    const fb = this.fb;
    this.userForm = fb.group({
      facultyid: fb.control("", [
        Validators.required,
        Validators.pattern(/(?=.*[a-z])(?=.*[0-9]).{8,}/),
      ]),
      name: fb.control("", [Validators.required]),
      branch: fb.control("", [Validators.required]),
      designation: fb.control("", [Validators.required]),
      totalexperience: fb.control("", [Validators.required]),
      dateOfBirth: fb.control("", [Validators.required]),
      dateOfJoining: fb.control("", [Validators.required]),
      mobileno: fb.control("", [Validators.required]),
      email: fb.control("", [
        Validators.required,
        Validators.email,
        Validators.pattern(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ),
      ]),
      password: fb.control("", [
        Validators.required,
        Validators.pattern(
          /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
        ),
      ]),
      // confirmPassword: ['', Validators.required]
    });
  }

  get f() {
    return this.userForm.controls;
  }

  signup() {
    for (let controller in this.userForm.controls) {
      this.userForm.get(controller).markAsTouched();
    }

    if (this.userForm.invalid) {
      this.submitted = true;
      return;
    }

    // Construct the data to be sent to the backend
    const data = {
      facultyid: this.userForm.value.facultyid,
      name: this.userForm.value.name,
      branch: this.userForm.value.branch,
      designation: this.userForm.value.designation,
      totalexperience: this.userForm.value.totalexperience,
      dateOfBirth: this.userForm.value.dateOfBirth,
      dateOfJoining: this.userForm.value.dateOfJoining,
      mobileno: this.userForm.value.mobileno,
      email: this.userForm.value.email,
      password: this.userForm.value.password,
    };

    // Send the data to the backend using HttpClient
    this.mServer.signup(data).subscribe(
      (res) => {
        console.log("Registered successfully:", res);
        this.mToastMsg(true, "Success", "Registered successfully!");
        this.router.navigate(["/login"]);
      },
      (err) => {
        console.log("Error registering:", err.error);
        this.mToastMsg(false, "Error", "Failed to register user.");
      }
    );
  }

  goto() {
    this.router.navigate(["/login"]);
  }

  async mToastMsg(tag: boolean, title: any, message: any) {
    await this.toastr[tag ? "success" : "error"](title, message, {
      timeOut: 3000,
    });
  }
}
function hasDropDownError() {
  throw new Error("Function not implemented.");
}
