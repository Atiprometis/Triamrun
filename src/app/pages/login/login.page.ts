import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../service/login.service';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';

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
    private router:Router,
  ) { }

  ngOnInit() {
  }

  

  login(){
    console.log('logindata');
    
    // let logindata = {
    //   u_email: this.u_email,
    //   u_password: this.u_password,
    // };

    console.log(this.logindata);
  
    //  let datalogin = JSON.stringify({
    //   'email': this.u_email,
    //   'password': this.u_password,
    //  });

     this.loginService.getUserlogin(this.logindata)
    //  data.map(res => res.json())
     .subscribe(data =>{
       
      //  this.router.navigate(['/mission']);
      console.log('postDataURL ss',data);
     });
  }
}
