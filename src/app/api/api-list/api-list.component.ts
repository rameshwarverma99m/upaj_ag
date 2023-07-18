import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api-service/api-service.service';

@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.component.html',
  styleUrls: ['./api-list.component.css']
})
export class ApiListComponent {
  
  showFilterPopup:boolean = false;
  listStyle: boolean = false;
  categoryhide:boolean = false;
  industriHide:boolean = false;
  categoryList: any = [];
  industryList: any = [];
  radioSelected: string = '';
  filterForm: FormGroup;
  apiList: any =[];
  allApiList: any =[];

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private formBuilder: FormBuilder,
    private apiService: ApiService
    ) {
      this.filterForm = this.formBuilder.group({
        category: ['', Validators.required],
        industry: ['', Validators.required],
      });
    }

  ngOnInit(){
    this.getCategory();
    this.getIndustry();
    this.getApiList();
    this.filterForm.get('category')?.valueChanges.subscribe(x => {
      this.apiList = this.allApiList.filter((el: any) => {
        return el.category_name === x;
      })
   })
  }

  cardType() {
    this.listStyle = false;
  }
  listType() {
    this.listStyle = true;
  }
  openFilter(){
    this.showFilterPopup = true;
    this.document.body.classList.add('showPopup');
  }
  closeFilter(){
    this.showFilterPopup = false;
    this.document.body.classList.remove('showPopup');
  }
  applyFilter(){
    this.closeFilter();
  }
  hideCategory(){
    this.categoryhide = !this.categoryhide;
  }
  hideIndustri(){
    this.industriHide = !this.industriHide;
  }
  getCategory(){
    this.apiService.get('api/v1/api/getCategories').subscribe((res: any) => {
      this.categoryList = res.data
    });
  }
  getIndustry(){
    this.apiService.get('api/v1/api/getindustries').subscribe((res: any) => {
      this.industryList = res.data;
    })
  }
  getApiList(){
    const obj = {
      "filter_on": false,
      "category_filter": [],
      "industry_filter": [],
      "api_filter": [],
      "status_filter": true,
      "search_string": ""
    }
    this.apiService.post('api/v1/api/getApiListing', obj).subscribe((res: any) => {
      this.apiList = res.data;
      this.allApiList = res.data;
      this.apiList.forEach((el: any) => {
        let indusrty = el.industry_name.split(",");
        el.industry_name = indusrty;
      });
    });
  }
}
