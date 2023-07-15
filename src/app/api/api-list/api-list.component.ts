import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.component.html',
  styleUrls: ['./api-list.component.css']
})
export class ApiListComponent {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  showFilterPopup:boolean = false;
  listStyle: boolean = false;
  categoryhide:boolean = false;
  industriHide:boolean = false;

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
}
