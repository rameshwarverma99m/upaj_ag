import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tab.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiListComponent } from './api/api-list/api-list.component';
import { ApiDetailComponent } from './api/api-detail/api-detail.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    SignupComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    HomeComponent,
    ApiListComponent,
    ApiDetailComponent,
    SearchFilterPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
