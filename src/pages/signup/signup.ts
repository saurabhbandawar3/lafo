import { SigninPage } from './../signin/signin';
import { User } from './../../models/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth} from 'angularfire2/auth';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  user = {} as User;
  constructor(private aAuth:AngularFireAuth,
              public navCtrl: NavController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  async register(user:User){
    try{
      const result = await this.aAuth.auth.createUserWithEmailAndPassword(user.email,user.password);
      console.log(result);
      if (result){
        this.navCtrl.push(SigninPage);
      }
    }
    catch(e){
      console.log(e);
    }
  }

}
