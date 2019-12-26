import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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


  constructor(public http: HttpClient) {

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

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
   });

    let data:any = {
      'second': this.second,
      'min': this.min,
      'hours': this.hours,
    };

    // console.log(data);

    

    this.http.post("http://localhost/triamrun/runrecord.php",data);
    

    // let url = "http://localhost/triamrun/runrecord.php";
    // let dataPost = new FormData();
    // dataPost.append('second',this.second);
  }

  onTimepause(){
    console.log("second : ",this.second);
    console.log("min : ",this.min);
    console.log("hours : ",this.hours);
    clearInterval(this.intervalVar);
  }
}
