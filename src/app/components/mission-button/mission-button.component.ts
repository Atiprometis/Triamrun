import { Component, OnInit } from '@angular/core';

import { MissionService } from '../../service/mission.service' 


@Component({
  selector: 'app-mission-button',
  templateUrl: './mission-button.component.html',
  styleUrls: ['./mission-button.component.scss'],
})
export class MissionButtonComponent implements OnInit {

  missioninfo: any;
  public mission_id = 0;
 
  isLoading = false;

  onClasschangeClick = {};
  onClasschangeClick2 = {};
  onClassfade ={}
  clcikCount = 0;
  isShow:boolean = false;

  constructor(
    private missionService:MissionService,

  ) { 
    
  }

  

  ngOnInit() {
    // this.missionService.showLoader();
    this.missionService.getMissioninfo()

    .subscribe(resp => {
      
      this.missioninfo = resp;

      console.log("resp data mission conponent :", this.missioninfo);
      // this.missionService.hideLoader();
    }),
    error => {
      console.log(error);

    };
  }

  showdata(){
    console.log('show data ',this.missioninfo);
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
