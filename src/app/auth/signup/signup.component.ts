import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api-service/api-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signUpForm: FormGroup;
  singupMsg: boolean = false;
  registeredSignupMsg: boolean = false;
  showSignupForm:boolean = true

  constructor(
		private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
		) {
		this.signUpForm = this.formBuilder.group({
      fullName: ['', Validators.required],
			orgName: [''],
      email: ['', Validators.required],
      mobileNo: [''],
		});
	}

  signupMsg(){
    this.singupMsg = false;
    this.router.navigateByUrl('/api-list');
    // this.registeredSignupMsg = true;
  }

  signup(){
    var jsn = {
      userName: this.signUpForm.value.fullName,
      organization_name: this.signUpForm.value.orgName,
      userEmail: this.signUpForm.value.email,
      userMobile: this.signUpForm.value.mobileNo
    }
    this.apiService.post( 'api/v1/user/register',jsn).subscribe((res: any )=> {
      if(!res.error){
        this.showSignupForm = false;
        this.singupMsg = true;
        setTimeout(() => this.signupMsg(), 5000);
      }
    });
  }
  
}
