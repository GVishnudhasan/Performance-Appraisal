import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MAPImapService } from './_service/m-apimap.service';
import { MInterfaceService } from './_service/m-interface.service';
import { HttpClientModule } from "@angular/common/http";
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
  ],
  providers: [MAPImapService,MInterfaceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
