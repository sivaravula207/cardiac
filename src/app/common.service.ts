import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }
  getLogos(){
    console.log("siva")
    let response = this.http.get('http://localhost:3001/logo/getlogo')
    return response
  }

  
}
