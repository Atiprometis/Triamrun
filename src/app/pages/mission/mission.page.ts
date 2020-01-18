import { Component, OnInit } from '@angular/core';
import { SegmentChangeEventDetail } from '@ionic/core';

import {MissionButtonComponent } from '../../components/mission-button/mission-button.component'

import { MissionService } from '../../service/mission.service';
import { Http } from '@angular/http';
@Component({
  selector: 'app-mission',
  templateUrl: './mission.page.html',
  styleUrls: ['./mission.page.scss'],
})
export class MissionPage implements OnInit {
  // missions: any =(data as any).default1;

  constructor(
    public http:Http,
    public missionService: MissionService,
  ) { 

    
   
    
  }

  ngOnInit() {

  }
  
  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>){
    console.log(event.detail);
    
  }
}
