import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api-service/api-service.service';

@Component({
  selector: 'app-api-detail',
  templateUrl: './api-detail.component.html',
  styleUrls: ['./api-detail.component.css']
})
export class ApiDetailComponent {
  activeTab: number = 1;
  api_code:string = '';
  apiDetail: any = [];
  errorCode: any = {};
  statusCode: any = {};

  constructor(
    private router: Router,
    private apiService: ApiService
  ){}

  ngOnInit(){
    this.api_code = (this.router.url).split("/")[2];
    console.log(this.api_code)
    this.getApiDetail();
  }

  getApiDetail(){
    this.apiService.get(`api/v1/api/getApiDetails?api_code=${this.api_code}`).subscribe((res:any) => {
      this.apiDetail = res.data;
      this.apiDetail.input_attribute = JSON.parse(this.apiDetail.input_attribute);
      this.apiDetail.output_attribute = JSON.parse(this.apiDetail.output_attribute);
      this.apiDetail.response_code_and_description = JSON.parse(this.apiDetail.response_code_and_description);
      this.errorCode = this.apiDetail.response_code_and_description.error_code;
      this.statusCode = this.apiDetail.response_code_and_description.status_code;
      this.apiDetail.request_json = JSON.parse(this.apiDetail.request_json);
      this.apiDetail.response = JSON.parse(this.apiDetail.response);
    })
  }
  setActiveTab(tabNumber: number) {
    this.activeTab = tabNumber;
  }
  getFieldValue(value: any, field: string){
    if(field === 'data_type'){
      return value.data_type;
    }
    if(field === 'description'){
      return value.description;
    }
  }
}
