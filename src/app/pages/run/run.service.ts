import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

// import { HttpClient, Headers ,RequestOptions } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class RunService {

serve: string="http://localhost/triamrun/insert_db.php";

  constructor(
    // private http: HttpClient,
    private http:Http
  ) { }

  sendPostRequest() {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    const requestOptions = new RequestOptions({ headers: headers });

    let postData = {
            "name": "Customer004",
            "email": "customer004@email.com",
            "tel": "0000252525"
    }

    this.http.post(this.serve, postData, requestOptions)
      .subscribe(data => {
        console.log(data['_body']);
       }, error => {
        console.log(error);
      });
  }

  public getData() {
    return this.http.get("http://localhost:8080/somedata.json");
  }
  public postData(jsonBody: any) {
    return this.http.post("http://localhost:8080/somedata", jsonBody);
  }

  public postDataURL(url:string,jsonBody: any) {
    return this.http.post(url, jsonBody);
  }


//   postData(body, file){
    
// let type = "application/json; charset+UTF-8";
// let headers = new Headers({ 'Content-Type': type});
// let option = new RequestOptions({headers: headers});

// return this.http.post(this.serve + file,JSON.stringify(body),option);

//   }
 
}
