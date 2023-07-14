import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'http://srv12.absolute.ag:4000/';

  constructor( private httpClient: HttpClient,) { }

  public post(url: string, data : any) {
		return this.httpClient.post(`${this.apiURL}${url}`, data);
	}
}
