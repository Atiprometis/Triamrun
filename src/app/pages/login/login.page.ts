import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public u_email: string;
  public u_password: string;

  constructor(
    loginService:LoginService,
  ) { }

  ngOnInit() {
  }

  login(){
    console.log('asdasd');
    console.log(this.u_email);
    console.log(this.u_password);
  }
}
