import { Component, OnInit } from '@angular/core';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Platform } from '@ionic/angular';
import { RunService } from '../run/run.service';

import { ModalController} from '@ionic/angular';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-geolocaion',
  templateUrl: './geolocaion.page.html',
  styleUrls: ['./geolocaion.page.scss'],
})
export class GeolocaionPage implements OnInit {

  lat1:any;
  lng1:any;
  lat2:any =14.615755;
  lng2:any =100.893776;
  dis:any;
  intervalVar: any;
  constructor(
    private geolocation: Geolocation,
    public platform: Platform,
    public runService: RunService,
    public modalCtrl:ModalController,
    ) {
    // this.initializeApp();
   }

  ngOnInit() {
  }
  // initializeApp() {
  //   this.platform.ready().then(() => {
  //     this.getLoc();
  //   });
  // }
  getLoc(){
    this.intervalVar = setInterval(function () {
      this.geolocation.getCurrentPosition(
        {maximumAge: 1000, timeout: 5000,
         enableHighAccuracy: true }
        ).then((resp) => {
              // resp.coords.latitude
              // resp.coords.longitude
              //alert("r succ"+resp.coords.latitude)

              // console.log(JSON.stringify( resp.coords));
              console.log(resp);
              // alert(JSON.stringify( resp.coords));

              this.lat1=resp.coords.latitude
              this.lng1=resp.coords.longitude
              },er=>{
                //alert("error getting location")
                alert('Can not retrieve Location')
              }).catch((error) => {
              //alert('Error getting location'+JSON.stringify(error));
              alert('Error getting location - '+JSON.stringify(error))
              });
    }.bind(this), 5000);

    
             
  }

  calculateDistance(){
    let lati1:any =14.548888;
    let  lngi1:any =100.907579;
    let lati2:any =14.5651728;
    let  lngi2:any =100.8835939;
    let  dis:any ;

      let p = 0.017453292519943295;    // Math.PI / 180
      let c = Math.cos;
      let a = 0.5 - c((lati1-lati2) * p) / 2 + c(lati2 * p) *c((lati1) * p) * (1 - c(((lngi1- lngi2) * p))) / 2;
      dis = (12742 * Math.asin(Math.sqrt(a))); // 2 * R; R = 6371 km
      console.log(lati1);
      console.log(lati2);
      console.log(lngi1);
      console.log(lngi2);
      console.log(dis);

      return dis;
    
  }
  

}
