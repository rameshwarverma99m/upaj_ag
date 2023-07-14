import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api-service/api-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signUpForm: FormGroup;

  constructor(
		private formBuilder: FormBuilder,
    private apiService: ApiService
		) {
		this.signUpForm = this.formBuilder.group({
			fullName: ['', Validators.required],
			orgName: ['', Validators.required],
      email: ['', Validators.required],
      mobileNo: ['', Validators.required],
			password: ['', Validators.required]
		});
	}

  signup(){
    var jsn = {
      userName: this.signUpForm.value.fullName,
      organization_name: this.signUpForm.value.orgName,
      userEmail: this.signUpForm.value.email,
      // password: this.signUpForm.value.password,
      userMobile: this.signUpForm.value.mobileNo
    }
    console.log(jsn, '------------>>>>>>>>>>>>>>>>')
    this.apiService.post( 'api/v1/user/register',jsn).subscribe(res => {
      console.log(res, '------------>>>>>>>>>>>>>>>>')
    });
  }
}
