import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MAPImapService } from './_service/m-apimap.service';
import { MInterfaceService } from './_service/m-interface.service';
import { HttpClientModule } from "@angular/common/http";
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { Lt5Component } from './lt5/lt5.component';
import { Mt5Component } from './mt5/mt5.component';
import { WithphdComponent } from './withphd/withphd.component';
import { HodenggComponent } from './hodengg/hodengg.component';
import { HodsnhComponent } from './hodsnh/hodsnh.component';
import { ToastrModule } from 'ngx-toastr';
import { RequestResetComponent } from './request-reset/request-reset.component';
import { ResponseResetComponent } from './response-reset/response-reset.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    Lt5Component,
    Mt5Component,
    WithphdComponent,
    HodenggComponent,
    HodsnhComponent,
    RequestResetComponent,
    ResponseResetComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    ReactiveFormsModule
  ],
  providers: [MAPImapService,MInterfaceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
