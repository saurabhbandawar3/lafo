import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import { ItemListPage } from '../item-list/item-list';
import { ItemFormPage } from '../item-form/item-form';
//import { auth } from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public pages : Array<{title:string,component:any,icon:any}>;
  public icons : Array<{title:string,component:any}>;
  constructor(public navCtrl: NavController,private afAuth:AngularFireAuth,private toast:ToastController) {
    this.pages = [
      {"title" : " Lost & Found Items", "component":ItemFormPage, "icon" : "clipboard" },
      {"title" : " Search List & Found Items", "component":ItemListPage, "icon" : "search"},
    ];
  }
  ionViewWillLoad(){
    this.afAuth.authState.subscribe(data=>{
      if(data && data.email &&data.uid){
      this.toast.create ({
        message:`Welcome to LAFO,${data.email}`,
        duration:3000
      }).present();
      console.log(data);
    }
    else{
      this.toast.create ({
      message:`Invalid User...`,
      duration:3000
      }).present();
    }
    })

  }
  open(page){
    this.navCtrl.push(page.component);}
}
