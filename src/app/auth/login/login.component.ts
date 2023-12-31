import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api-service/api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  showError: boolean = false;
  errorMsg: string = ''

  constructor(
		private apiService: ApiService,
		private formBuilder: FormBuilder,
    private router: Router
		) {
		this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
			password: ['', Validators.required]
		});
	}

  login(){
    this.apiService.get(`api/v1/user/login?email=${this.loginForm.value.email}&password=${this.loginForm.value.password}`).subscribe(
      (res: any) => {
        this.router.navigateByUrl('/api-list');
      }, 
      (error: any) => {
        if(error.error.error){
          this.showError = true;
          this.errorMsg = error.error.message
        }
      }
      );

  }

}
