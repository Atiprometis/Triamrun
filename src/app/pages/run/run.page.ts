import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';
import { RunService } from './run.service';
import { Observable } from 'rxjs';
import { callCordovaPlugin } from '@ionic-native/core/decorators/common';

// import { map } from 'rxjs/operator';
import { Platform } from '@ionic/angular';
import { Geolocation} from '@ionic-native/geolocation/ngx';

import { Plugins } from '@capacitor/core';

declare var google;

@Component({
  selector: 'app-run',
  templateUrl: './run.page.html',
  styleUrls: ['./run.page.scss'],
})
export class RunPage implements OnInit {
  public second = 0;
  public min = 0;
  public hours = 0;
  intervalVar: any;
  map:any;    
  marker:any;
  latitude:any="";
  longtitude:any="";
  timestamp:any="";

  constructor( 
    public http:Http,
    public runService: RunService,
    public platform:Platform,
    public geolocation:Geolocation,
  ) {

   

    // this.platform.ready().then(() => {
    //   var mapOptions={
    //     center:{lat:23.23366,lng:79.3822},
    //     zoom:7
    //   }
    //   this.map = new google.maps.Map(document.getElementById("map"),mapOptions);
    // })

    // Geolocation(){
    //   var ref = this;
    //   let watch this.geolocation.watchPosition();
    //   watch.subscribe((possition)=>{
    //     var gps = new google.maps.Latlg
    //     (possition.coordsla.latitude,possition.coordsla.longtitude)
    //   })
    // }

   }

  ngOnInit() {
  }
  onLocation(position){
 
    alert('Latitude: '          + position.coords.latitude          + '\n' +
    'Longitude: '         + position.coords.longitude         + '\n' +
    'Altitude: '          + position.coords.altitude          + '\n' +
    'Accuracy: '          + position.coords.accuracy          + '\n' +
    'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
    'Heading: '           + position.coords.heading           + '\n' +
    'Speed: '             + position.coords.speed             + '\n' +
    'Timestamp: '         + position.timestamp                + '\n');



  }
  getDataFunction() {
    let tmp_resp = [
      {
        fname: "A",
        lname: "B",
      },
      {
        fname: "C",
        lname: "D",
      }
    ];


    this.runService.getData()
      // .map((resp) => resp["full_name"] = resp.fname + " " + resp.lname )
      .subscribe(resp => {
        console.log("resp data :", resp);
        //TODO

      });
  }

  submitDataFunction() {
    let data = {};
    this.runService.postData(data)
      .subscribe(resp => {
        console.log("resp data :", resp);
        //TODO
      }, (error) => {
        console.log("error :", error);
        //TODO Error
      });
  }

  onRunrecord() {
    this.intervalVar = setInterval(function () {
      // alert(this.timer++);
      this.second++;
      if (this.second >= 60) {
        this.min++;
        this.second = 0;
      } else if (this.min >= 60) {
        this.hours++;
        this.min = 0;
      }
    }.bind(this), 1000);
   
    // let  data:Observable<any> =  this.http.post("http://localhost/triamrun/insert_db.php", dataPost);
   
    // data.subscribe((resp) => {
    //   if(resp.status == 200){
    //     alert(resp.msg);
    //   }else{
    //     alert(resp.msg);
    //   }
    // console.log('postDataURL resp :',resp);
    // });
    let usrl:string = "http://localhost/triamrun/insert_db.php";
     let dataPost = JSON.stringify({
      'hours': this.hours,
      'min': this.min,
      'second': this.second,
     });

     let data:Observable<any> = this.runService.postDataURL(usrl,dataPost)
     data.map(res => res.json())
     data.subscribe(data =>{
      console.log('postDataURL ss',data);
     });

//  let  data:Observable<any> =  this.runService.postDataURL(usrl, dataPost);

    // this.runService.postDataURL("http://localhost/triamrun/insert_db.php", dataPost)
    // data.subscribe((resp) => {

    //   console.log('postDataURL resp :',resp);
    //   });

  }

  onTimepause() {
    console.log("second : ", this.second);
    console.log("min : ", this.min);
    console.log("hours : ", this.hours);

    let usrl:string = "http://localhost/triamrun/insert_db.php";
     let dataPost = JSON.stringify({
      'hours': this.hours,
      'min': this.min,
      'second': this.second,
     });

     let data:Observable<any> = this.runService.postDataURL(usrl,dataPost)
     data.map(res => res.json())
     data.subscribe(data =>{
      console.log('postDataURL ss',data);
     });

    clearInterval(this.intervalVar);
  }
  onRunworking(){
    this.intervalVar = setInterval(function () {
      // alert(this.timer++);
      this.second++;
      if (this.second >= 60) {
        this.min++;
        this.second = 0;
      } else if (this.min >= 60) {
        this.hours++;
        this.min = 0;
      }
    }.bind(this), 1000);
  }

  onTimeend(){
    let usrl:string = "http://localhost/triamrun/insert_db.php";
     let dataPost = JSON.stringify({
      'hours': this.hours,
      'min': this.min,
      'second': this.second,
     });

     let data:Observable<any> = this.runService.postDataURL(usrl,dataPost)
     data.map(res => res.json())
     data.subscribe(data =>{
      console.log('postDataURL ss',data);
     });

    clearInterval(this.intervalVar);
  }



  Geolocation(){

  }
}
