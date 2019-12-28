import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { toUnicode } from 'punycode';
@Component({
  selector: 'app-map-modal',
  templateUrl: './map-modal.component.html',
  styleUrls: ['./map-modal.component.scss'],
})
export class MapModalComponent implements OnInit,AfterViewInit {

  @ViewChild('map', { static: false })
  mapElementRef: ElementRef;

  constructor(
    private modalCtrl: ModalController,
    private renderer: Renderer2
  ) { }

  ngOnInit() {}

 

  //  haversine_distance(mk1, mk2) {
  //   var R = 3958.8; // Radius of the Earth in miles
  //   var rlat1 = mk1.position.lat() * (Math.PI/180); // Convert degrees to radians
  //   var rlat2 = mk2.position.lat() * (Math.PI/180); // Convert degrees to radians
  //   var difflat = rlat2-rlat1; // Radian difference (latitudes)
  //   var difflon = (mk2.position.lng()-mk1.position.lng()) * (Math.PI/180); // Radian difference (longitudes)

  //   var d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));
  //   return d;
  // }

  ngAfterViewInit(){
    this.getGooleMaps().then(googleMaps => {
      const mapEle = this.mapElementRef.nativeElement;
      const map = new googleMaps.Map(mapEle, {
        center: { lat: 14.548888 , lng:100.907579 },
        zoom: 16
      });

      googleMaps.event.addListenerOnce(map, 'idle', () => {
        this.renderer.addClass(mapEle,'visible');
      });
    }).catch(err =>{
      console.log(err);
    })
  }

    onCancel(){
      this.modalCtrl.dismiss();
    }

    private getGooleMaps(): Promise<any>{
      const win = window as any;
      const googleMudule = win.google;
      if(googleMudule && googleMudule.maps){
        return Promise.resolve(googleMudule.maps);
      }
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDAKCVJVluSXNQ4_ZHfdjcT3gloRLp5GUQ';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        script.onload = () => {
          const loadedGoogleModule = win.google;
          if(loadedGoogleModule && loadedGoogleModule.maps){
            resolve(loadedGoogleModule.maps);
          }else {
            reject('google map not working');
          }
        };
      })
    }
}
