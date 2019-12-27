import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RunService {

  constructor(
    public http: HttpClient
  ) { }

  public getData() {
    return this.http.get("http://localhost:8080/somedata.json");
  }
  public postData(jsonBody: any) {
    return this.http.post("http://localhost:8080/somedata", jsonBody);
  }
  public postDataURL(url:string,jsonBody: any) {
    return this.http.post(url, jsonBody);
  }

 
}
