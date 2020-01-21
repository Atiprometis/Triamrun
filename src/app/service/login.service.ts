import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  serve: string="http://localhost/triamrun/login.php";

  constructor(
    private http:Http,
  ) { }

  getUserlogin(){
    return this.http.get(this.serve);
  }
}
