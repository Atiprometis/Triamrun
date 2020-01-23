import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../service/login.service';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

   u_email: string = '';
   u_password: string = '';
    public logindata = {}

    keyemail:string = 'useremail';
    keypassword:string = 'userpassword';

    userdata: any;

  constructor(
    public loginService:LoginService,
    private router:Router,
    private storage: Storage
  ) { }

  ngOnInit() {
  }

  

 
  

  login(){

    // this.storage.set(this.keyemail, this.u_email);
    // this.storage.set(this.keypassword, this.u_password);

    // this.logindata = {
    //   u_email: this.u_email,
    //   u_password: this.u_password,
    // };

   

  
     let logindata = JSON.stringify({
      'email': this.u_email,
      'password': this.u_password,
     });
     console.log('logindata',this.logindata);
     
     this.loginService.getUserlogin(this.logindata)

     .subscribe(data =>{

      this.userdata = data.json();


      console.log('userdata',this.userdata);
  
      this.storage.set('userinfo', this.userdata);
 
      //  this.router.navigate(['/mission']);
      

      // insert data user to storage this is get data from storage

      this.storage.get('userinfo').then((userinfoval) => {   
      console.log('userinfo',userinfoval);});
     }),
     error => {
       // this.missionService.hideLoader();
       console.log(error);
 
     };


  }

  getUser(){
    this.storage.get('userinfo').then((userinfoval) => {   

      console.log('userinfo',userinfoval);

    });

    

  }
}
