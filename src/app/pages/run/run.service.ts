import { Injectable } from '@angular/core';
import { RunPage } from '../run/run.page';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RunService {

  constructor(private http: HttpClient ) { }

  postData() {
    this.http.post<any>("http://localhost/triamrun/insert_db.php");
  }

}
