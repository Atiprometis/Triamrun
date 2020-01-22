import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../service/login.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public u_email: string = "";
  public u_password: string = "";
  public logindata = {}

  constructor(
    public loginService:LoginService,

  ) { }

  ngOnInit() {
  }

  

  login(){
    console.log('logindata');
    console.log(this.logindata);
    

  
    //  let datalogin = JSON.stringify({
    //   'email': this.u_email,
    //   'password': this.u_password,
    //  });

     let data:Observable<any> = this.loginService.getUserlogin(this.logindata);
     data.map(res => res.json())
     data.subscribe(data =>{
      console.log('postDataURL ss',data);
     });
  }
}
