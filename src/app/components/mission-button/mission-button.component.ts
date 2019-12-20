import { Component, OnInit } from '@angular/core';


import * as data from '../../../assets/data/data.json';
@Component({
  selector: 'app-mission-button',
  templateUrl: './mission-button.component.html',
  styleUrls: ['./mission-button.component.scss'],
})
export class MissionButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(data);
  }

}
