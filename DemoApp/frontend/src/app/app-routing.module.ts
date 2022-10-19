import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { HomeComponent } from "./home/home.component";
import { Lt5Component } from './lt5/lt5.component';
import { Mt5Component } from './mt5/mt5.component';
import { WithphdComponent } from './withphd/withphd.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'lt5',
    component: Lt5Component
  },
  {
    path: 'mt5',
    component: Mt5Component
  },
  {
    path: 'withphd',
    component: WithphdComponent
  },
 
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }