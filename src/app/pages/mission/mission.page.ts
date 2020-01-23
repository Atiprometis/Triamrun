import { Component, OnInit } from '@angular/core';
import { SegmentChangeEventDetail } from '@ionic/core';

import {MissionButtonComponent } from '../../components/mission-button/mission-button.component'

import { MissionService } from '../../service/mission.service';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-mission',
  templateUrl: './mission.page.html',
  styleUrls: ['./mission.page.scss'],
})
export class MissionPage implements OnInit {
  // missions: any =(data as any).default1;


   public logindata = {}

   keyemail:string = '';
   keypassword:string = '';
   missioninfo: any;
   u_email: any;
   u_password: any;


   


  constructor(
    public http:Http,
    public missionService: MissionService,
    private storage: Storage
  ) { 

    this.storage.get(this.keyemail).then((valemail) => {   
      this.u_email = valemail;
      console.log('email',valemail);
         // update arrays
    });
    
    this.storage.get(this.keypassword).then((valpassword) => {   
      this.u_password = valpassword;
      console.log('password',valpassword);
         // update arrays
    });
   
    
  }

  ngOnInit() {
    

    if(this.keyemail == null ){
      console.log('no data user');
    }else{
      this.missionService.getMissioninfo()
      // .map((res: any) => res.json());
      .subscribe(resp => {
        console.log(resp);
  
        this.missioninfo = resp.json();
  
        // console.log("resp data mission conponent :", this.missioninfo);
        // this.missionService.hideLoader();
      }),
      error => {
        // this.missionService.hideLoader();
        console.log(error);
  
      };
    }
    
  }
  getUser(){
    this.storage.get(this.keyemail).then((valemail) => {   

      console.log('email',valemail);
         // update arrays
    });
    this.storage.get(this.keypassword).then((valpassword) => {   

      console.log('password',valpassword);
         // update arrays
    });

    console.log('u_emailss',this.keyemail);
    // console.log('u_passwordss',this.u_password);
  }
  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>){
    console.log(event.detail);
    
  }
}
