import { Component, OnInit, Input } from '@angular/core';

import { MissionService } from '../../service/mission.service' 
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Router} from '@angular/router';

import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-mission-button',
  templateUrl: './mission-button.component.html',
  styleUrls: ['./mission-button.component.scss'],
})
export class MissionButtonComponent implements OnInit {

  @Input() missioninfo: any[];

  public mission_id = 0;
 
  isLoading = false;
  
  onClasschangeClick = {};
  onClasschangeClick2 = {};
  onClassfade ={};
  clcikCount = 0;
  isShow:boolean = false;
  itemObservable: any;

  numberuser: any;

  missionid: number;
  missionname: string;
  missiondistance: number;
  


  constructor(
    private missionService:MissionService,
    private router:Router,
    private navCtrl: NavController
  ) { 
    this.numberuser = {
      number: '1',
      phone:[
        '08955430',
        '094304223',
        '089998'
      ]
    }
    
  }

  

  ngOnInit() {
    // // this.missionService.showLoader();

    // this.missionService.getMissioninfo()
    // // .map((res: any) => res.json());
    // .subscribe(resp => {
    //   console.log(resp);
    //   this.missioninfo = resp.json();

    //   // console.log("resp data mission conponent :", this.missioninfo);
    //   // this.missionService.hideLoader();
    // }),
    // error => {
    //   // this.missionService.hideLoader();
    //   console.log(error);

    // };
  }
  missionHistory(){
    // this.navCtrl.navigateForward('mission-history/1234');
    this.navCtrl.navigateBack('/mission-history');
    // this.router.navigate(['/mission-history']);
  }
  
  setClasschange(){
    if(this.clcikCount == 2){
      this.clcikCount =0;
    }
    this.clcikCount++;
    this.onClasschangeClick = {
      'contaner-mission-botton2':this.clcikCount==1,
      'contaner-mission-botton':this.clcikCount==2,
    }
    
    this.onClassfade = {
      'fade':this.clcikCount==1,
      '':this.clcikCount==2,
    }
    if(this.isShow == true){
      this.isShow = false;
    }else{
      this.isShow = true;
    }

  }
  

}
