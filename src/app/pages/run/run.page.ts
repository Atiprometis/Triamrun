import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { map } from 'rxjs/operator';
import { RunService } from './run.service';
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


  constructor(public runService: RunService) {

   }

  ngOnInit() {
  }

  
  onRunrecord(){
     this.intervalVar = setInterval(function(){
      // alert(this.timer++);
      this.second++;


      if(this.second >= 60){
        this.min++;
        this.second = 0;
      }else if(this.min >= 60){
        this.hours++;
        this.min = 0;
      }
    }.bind(this),1000)

  }

  onTimepause(){
    console.log("second : ",this.second);
    console.log("min : ",this.min);
    console.log("hours : ",this.hours);
    clearInterval(this.intervalVar);
  }
}
