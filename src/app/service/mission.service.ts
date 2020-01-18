import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  constructor(
    private http:Http
    ) { }

    getMissioninfo(){
      return this.http.get("http://localhost/triamrun/getmissioninfo.php");

    }
}
