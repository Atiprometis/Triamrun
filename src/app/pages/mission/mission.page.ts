import { Component, OnInit } from '@angular/core';
import { SegmentChangeEventDetail } from '@ionic/core';

import {MissionButtonComponent } from '../../components/mission-button/mission-button.component'


@Component({
  selector: 'app-mission',
  templateUrl: './mission.page.html',
  styleUrls: ['./mission.page.scss'],
})
export class MissionPage implements OnInit {
  // missions: any =(data as any).default1;

  constructor() { }

  ngOnInit() {

  }
  
  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>){
    console.log(event.detail);
    
  }
}
