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

  constructor(
    private missionService:MissionService,

  ) { 
    
  }

  

  ngOnInit() {
    this.missionService.showLoader();
    this.missionService.getMissioninfo()

    .subscribe(resp => {
      
      this.missioninfo = resp;

      console.log("resp data mission conponent :", this.missioninfo);
      this.missionService.hideLoader();
    }),
    error => {
      console.log(error);

    };
  }

}
