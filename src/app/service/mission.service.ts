import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { LoadingController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class MissionService {


  isLoading = false;
  loaderToShow: any;

  constructor(
    private http:Http,
    public loadingController: LoadingController
    ) { }

    // async present() {
    //   this.isLoading = true;
    //   return await this.loadingController.create({
    //     duration: 5000,
    //   }).then(a => {
    //     a.present().then(() => {
    //       console.log('presented');
    //       if (!this.isLoading) {
    //         a.dismiss().then(() => console.log('abort presenting'));
    //       }
    //     });
    //   });
    // }
  
    // async dismiss() {
    //   this.isLoading = false;
    //   return await this.loadingController.dismiss().then(() => console.log('dismissed'));
    // }

    showAutoHideLoader() {
      this.loadingController.create({
        message: 'This Loader Will Auto Hide in 2 Seconds',
        duration: 2000
      }).then((res) => {
        res.present();
   
        res.onDidDismiss().then((dis) => {
          console.log('Loading dismissed! after 2 Seconds');
        });
      });
    }

    showLoader() {
      this.loaderToShow = this.loadingController.create({
        // message: 'This Loader will Not AutoHide'
      }).then((res) => {
        res.present();
   
        res.onDidDismiss().then((dis) => {
          console.log('Loading dismissed!');
        });
      });
      this.hideLoader();
    }

    hideLoader() {
      setTimeout(() => {
        this.loadingController.dismiss();
      }, 1000);
    }

    getMissioninfo(){
      return this.http.get("http://localhost/triamrun/getmissioninfo.php");

      
    }

    // getMissioninfo(){
    //   return this.http.get("http://localhost/triamrun/getmissioninfo.php");

      
    // }
}
