import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  industryListCount: any ={};
  industryNameList: any = [];
  radioSelected: string = '';
  categoryFilterForm: FormGroup;
  industryFilterForm: FormGroup;
  apiList: any =[];
  allApiList: any =[];
  checkboxGroup: { [key: string]: FormControl } = {};
  selectedIndustry: string[] = [];
  selectedCategory: string = '';
  searchTerm = '';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private formBuilder: FormBuilder,
    private apiService: ApiService
    ) {
      this.industryFilterForm = new FormGroup(this.checkboxGroup);
      this.categoryFilterForm = this.formBuilder.group({
        category: ['', Validators.required],
      });
    }

  ngOnInit(){
    this.getCategory();
    this.getIndustry();
    this.getApiList();
    this.categoryFilterForm.get('category')?.valueChanges.subscribe(x => {
      this.selectedCategory = x;
      this.updateApiList();
      this.getIndustryCountList();
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
      this.industryList.forEach((el: any) => {
        this.industryNameList.push(el.industry_name);
      })
      this.industryNameList.forEach((option: string) => {
        const checkboxControl = new FormControl(false);
        checkboxControl.valueChanges.subscribe((value) => {
          if (value) {
            this.selectedIndustry.push(option);
            this.updateApiList();
          } else {
            this.selectedIndustry = this.selectedIndustry.filter((item: any) => !item.includes(option));
            this.updateApiList();
          }
        });
        this.checkboxGroup[option] = checkboxControl;
      });
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
      this.apiList.forEach((el: any) => {
        let indusrty = el.industry_name.split(",");
        el.industry_name = indusrty;
        el.industry_name = el.industry_name.map((item: any) => (item === 'Insurance' || item === ' Re-Insurance' ) ? 'Insurance, Re-Insurance' : item);
      });
      this.allApiList = this.apiList;
      this.getIndustryCountList();
    });
  }

  updateApiList(){
    let list =  this.allApiList;
    if(this.selectedCategory){
      list = list.filter((el: any) => {
        return el.category_name === this.selectedCategory;
      })
    }
    if(this.selectedIndustry.length > 0){
      list = list.filter((el: any) => {
        return this.selectedIndustry.some((element) => el.industry_name.includes(element));
      })
    }
    this.apiList = list;
  }

  clearAll(){
    this.categoryFilterForm.reset();
    this.industryFilterForm.reset();
  }

  showCount(type: string, name: string){
    let list = [];
    if(type === 'category'){
      list = this.allApiList.filter((el: any) => {
        return el.category_name === name;
      })
    }
    if(type === 'industry'){
      list = this.apiList.filter((el: any) => {
        return el.industry_name.includes(name);
      })
    }
    return list.length;
  }

  getIndustryCountList(){
    this.industryList.forEach((el:any) => {
      this.industryListCount[`${el.industry_name}`] = this.showCount('industry', el.industry_name)
    });
  }
}
