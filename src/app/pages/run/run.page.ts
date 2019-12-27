import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RunService } from './run.service';
import { Observable } from 'rxjs';
import { callCordovaPlugin } from '@ionic-native/core/decorators/common';
// import { map } from 'rxjs/operator';

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


  constructor( 
    public http:HttpClient,
    public runService: RunService,
  ) { }

  ngOnInit() {
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

    // console.log(data);
    // console.time("StartRecord")
    // this.submitDataFunction();
    // console.timeEnd("StartRecord")

    let dataPost = {
      'hoursData': this.hours,
      'minData': this.min,
      'secondData': this.second,
    }

    let  data:Observable<any> =  this.runService.postDataURL("http://localhost/triamrun/insert_db.php", dataPost);
    // let  data:Observable<any> =  this.http.post("http://localhost/triamrun/insert_db.php", dataPost);
    data.subscribe((resp) => {
      if(resp.status == 200){
        alert(resp.msg);
      }else{
        alert(resp.msg);
      }
    console.log('postDataURL resp :',resp);
    });

    // this.runService.postDataURL("http://localhost/triamrun/insert_db.php", dataPost)
    // .subscribe((resp) => {

    // console.log('postDataURL resp :',resp);
    // })

    // let url = "http://localhost/triamrun/runrecord.php";
    // let dataPost = new FormData();
    // dataPost.append('second',this.second);
  }

  onTimepause() {
    console.log("second : ", this.second);
    console.log("min : ", this.min);
    console.log("hours : ", this.hours);
    clearInterval(this.intervalVar);
  }
}
