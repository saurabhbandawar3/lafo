import { SigninPage } from './../pages/signin/signin';
import { ItemFormPage } from './../pages/item-form/item-form';
import { ItemListPage } from './../pages/item-list/item-list';
import { AboutPage } from './../pages/about/about';
import { HomePage } from './../pages/home/home';

import { Component,ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { Nav } from 'ionic-angular/components/nav/nav';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav:Nav;
  rootPage:any = TabsPage;
  public pages : Array<{title:string,component:any,icon:any}>;
  public icons : Array<{title:string,component:any}>;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.pages = [
      {"title" : " Home", "component":HomePage , "icon" :"home" },
      {"title" : " Login", "component":SigninPage ,"icon":"person-add"},
      {"title" : " Report Item", "component":ItemListPage ,"icon":"clipboard"},
      {"title" : "Items", "component":ItemListPage , "icon":"search"},
      {"title" : " About", "component":AboutPage , "icon" :"information-circle"},
      {"title" : " Report Item", "component":ItemFormPage , "icon" :"information-circle"},
    ];
  }
  openPage(page){
    this.nav.setRoot(page.component);}

}
