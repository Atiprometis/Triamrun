import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-mission-history',
  templateUrl: './mission-history.page.html',
  styleUrls: ['./mission-history.page.scss'],
})
export class MissionHistoryPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  getBack(){
    this.navCtrl.back();
  }
}
