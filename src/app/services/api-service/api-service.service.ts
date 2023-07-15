import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'https://uwrapiuat.igrow.ag/';

  constructor( private httpClient: HttpClient,) { }

  public post(url: string, data : any) {
		return this.httpClient.post(`${this.apiURL}${url}`, data);
	}
}
