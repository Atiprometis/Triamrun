import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Geolocation} from '@ionic-native/geolocation/ngx';
import {FormsModule} from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { TabsPage } from './pages/tabs/tabs/tabs.page';


@NgModule({
  declarations: [AppComponent,TabsPage],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(),
    HttpClientModule, 
    HttpModule,
    FormsModule,
    IonicStorageModule.forRoot({
      name: '__mydb',
driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    AppRoutingModule],

  providers: [
    Geolocation,
    StatusBar,
    SplashScreen,

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
