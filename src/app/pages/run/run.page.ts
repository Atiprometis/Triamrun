import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';
import { RunService } from './run.service';
import { Observable } from 'rxjs';
import { callCordovaPlugin } from '@ionic-native/core/decorators/common';

// import { map } from 'rxjs/operator';
import { Platform } from '@ionic/angular';
import { Geolocation} from '@ionic-native/geolocation/ngx';
import { Storage } from '@ionic/storage';
import { Plugins } from '@capacitor/core';
import { NavController } from '@ionic/angular';
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
  public pace = 0;
  public calorie = 0;
  public distance = 0.00;
  userid:any;
  missionid:any;
  intervalVar: any;
  map:any;    
  marker:any;
  latitude:any="";
  longtitude:any="";
  timestamp:any="";

  onClasschangeClick = {};
  clcikCount = 0;
  isShow:boolean = true;
  constructor( 
    public http:Http,
    public runService: RunService,
    public platform:Platform,
    public geolocation:Geolocation,
    private storage: Storage,
    private navCtrl: NavController
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
    return new Promise(resolve => {
      this.storage.get('missioninfo').then(missioninfoval => {  
        this.missionid = missioninfoval[0].level_id;
        console.log('missioninfoval',this.missionid);
        console.log('missioninfoval2',missioninfoval[0].level_id);
      });
  
      this.storage.get('userinfo').then(userinfoval => {  
          this.userid = userinfoval[0].userid;
        console.log('userinfo',userinfoval);
        console.log('userinfo1',userinfoval[0].userid);
  
      });
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
  onUsermiss(){

    return new Promise(resolve => {
      this.storage.get('missioninfo').then(missioninfoval => {  
        this.missionid = missioninfoval[1].level_id;
        console.log('missioninfoval',missioninfoval[1].level_id);
      });
  
      this.storage.get('userinfo').then(userinfoval => {  
          this.userid = userinfoval[0].userid;
        console.log('userinfo',userinfoval);
        console.log('userinfo1',userinfoval[0].userid);
  
      });
        });

    
  }
// consoloLog(){
//   console.log('userid : ',this.userid);
//   console.log('missionlevelid : ',this.missionlevelid);
// }

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

 
    let usrl:string = "http://localhost/triamrun/insert_db.php";
     let dataPost = JSON.stringify({
      'hours': this.hours,
      'min': this.min,
      'second': this.second,
      'pace': this.pace,
      'calorie': this.calorie,
      'distance': this.distance,
      'userid':this.userid,
      'missionid':this.missionid
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


      this.onClasschangeClick = {
        'contaner-mission-botton2':this.clcikCount==1,
        
      }
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
      'pace': this.pace,
      'calorie': this.calorie,
      'distance': this.distance,
      'userid':this.userid,
      'missionid':this.missionid
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
      'pace': this.pace,
      'calorie': this.calorie,
      'distance': this.distance,
      'userid':this.userid,
      'missionid':this.missionid
     });

     let data:Observable<any> = this.runService.postDataURL(usrl,dataPost)
     data.map(res => res.json())
     data.subscribe(data =>{
      console.log('postDataURL ss',data);
     });

    clearInterval(this.intervalVar);
    this.navCtrl.navigateBack('run-show-miss-challenge');
  }
  
  setClasschange(){

    
  }
  countplus(){
    this.clcikCount++;
    console.log(this.clcikCount);
  }

  Geolocation(){

  }
}
