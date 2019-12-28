import { Component, OnInit } from '@angular/core';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Platform } from '@ionic/angular';
import { RunService } from '../run/run.service';

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
  constructor(
    private geolocation: Geolocation,
    public platform: Platform,
    public runService: RunService,
    ) {
    this.initializeApp();
   }

  ngOnInit() {
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.getLoc();
    });
  }
  getLoc(){
    
    this.geolocation.getCurrentPosition(
      {maximumAge: 1000, timeout: 5000,
       enableHighAccuracy: true }
      ).then((resp) => {
            // resp.coords.latitude
            // resp.coords.longitude
            //alert("r succ"+resp.coords.latitude)
            alert(JSON.stringify( resp.coords));
      
            this.lat1=resp.coords.latitude
            this.lng1=resp.coords.longitude
            },er=>{
              //alert("error getting location")
              alert('Can not retrieve Location')
            }).catch((error) => {
            //alert('Error getting location'+JSON.stringify(error));
            alert('Error getting location - '+JSON.stringify(error))
            });
             
  }

  // calculateDistance(){

  //     let p = 0.017453292519943295;    // Math.PI / 180
  //     let c = Math.cos;
  //     let a = 0.5 - c((this.lat1-this.lat2) * p) / 2 + c(this.lat2 * p) *c((this.lat1) * p) * (1 - c(((this.lng1- this.lng2) * p))) / 2;
  //     this.dis = (12742 * Math.asin(Math.sqrt(a))); // 2 * R; R = 6371 km
  //     console.log(this.lat1);
  //     console.log(this.lat2);
  //     console.log(this.lng1);
  //     console.log(this.lng2);
  //     console.log(this.dis);
  //     return this.dis;
    
  // }
  

}
