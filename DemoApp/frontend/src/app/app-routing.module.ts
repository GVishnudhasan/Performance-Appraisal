import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { HomeComponent } from "./home/home.component";
import { Lt5Component } from "./lt5/lt5.component";
import { Mt5Component } from "./mt5/mt5.component";
import { WithphdComponent } from "./withphd/withphd.component";
import { HodenggComponent } from "./hodengg/hodengg.component";
import { HodsnhComponent } from "./hodsnh/hodsnh.component";
import { RequestResetComponent } from "./request-reset/request-reset.component";
import { ResponseResetComponent } from "./response-reset/response-reset.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "signup",
    component: SignupComponent,
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "lt5",
    component: Lt5Component,
  },
  {
    path: "mt5",
    component: Mt5Component,
  },
  {
    path: "withphd",
    component: WithphdComponent,
  },
  {
    path: "hodengg",
    component: HodenggComponent,
  },
  {
    path: "hodsnh",
    component: HodsnhComponent,
  },
  {
    path: "request-reset-password",
    component: RequestResetComponent,
  },
  {
    path: "response-reset-password/:token",
    component: ResponseResetComponent,
  },

  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "**",
    redirectTo: "login",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
