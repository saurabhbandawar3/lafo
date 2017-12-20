import { AngularFireAuth } from 'angularfire2/auth';
import { User } from './../../models/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
//import { auth } from 'firebase/app';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  user = {} as User;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private aAuth:AngularFireAuth) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }
  async login(user){
    try{
      const result =await this.aAuth.auth.signInWithEmailAndPassword(user.email,user.password);
      console.log(result);
      if(result){
        this.navCtrl.push(HomePage);
      }
    }
    catch(e){
      console.log(e);
    }
  }
  register(){
    this.navCtrl.setRoot(SignupPage);
  }
}
