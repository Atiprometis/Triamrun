import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: string="http://localhost/triamrun/login.php";

  constructor(
    private http:Http,
  ) { }

  getUserlogin(jsonBody: any){
    return this.http.post(this.url,jsonBody);
  }
}
