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

  
   missioninfo: any;
   u_email: any;
   u_password: any;
   userid:number ;
   public userinfo: any;
   public userinfo2: any;
   public result:any
   


  constructor(
    public http:Http,
    public missionService: MissionService,
    private storage: Storage
  ) { 

   
   
    
  }

  ngOnInit() {
    console.log("2");
    this.result = this.storage.get('userinfo').then(userinfoval => {   

      // this.userinfo = JSON.stringify(this.userinfo2);

      this.userinfo = userinfoval;

      // console.log('userinfo',userinfoval);
      // this.userinfo2 = this.userinfo;
      
      // console.log('result1',this.userinfo);
      // console.log('result2',this.userinfo2);

      if(this.result !== null ){

        console.log('result2',this.userinfo);
  
        
        this.missionService.getMissioninfo(this.userinfo)
        // .map((res: any) => res.json());
        .subscribe(resp => {
          console.log(resp);
          
          this.missioninfo = resp.json();
          this.storage.set('missioninfo',this.missioninfo);
          // console.log("resp data mission conponent :", this.missioninfo);
          // this.missionService.hideLoader();
        }),
        error => {
          // this.missionService.hideLoader();
          console.log(error);
    
        };
      }else{
        console.log('no data user');
      }
    });

  }
  ngAfterContentInit(){
    console.log("1");
    
  }
  ngDoCheck(){

  }
  getUser(){
    return new Promise((resolve, reject) =>{
      this.result = this.storage.get('userinfo').then(userinfoval => {   

        this.userinfo = userinfoval;


        console.log('userinfo',userinfoval);
        console.log('result',this.userinfo);

        if(this.result !== null ){

          console.log('result2',this.userinfo);
    
          this.missionService.getMissioninfo(this.userinfo)
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
        }else{
          console.log('no data user');
        }
      });
    })

  }

  getMissioninfo(){
    this.result = this.storage.get('missioninfo').then(missioninfoval => {   
      console.log('missioninfoval',missioninfoval);
    });
  }
  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>){
    console.log(event.detail);
    
  }
}
