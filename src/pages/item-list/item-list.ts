//import { Item } from './../../models/item';
import { AngularFireDatabase} from 'angularfire2/database';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
//import { FirebaseApp } from '@firebase/app-types';
//import { FirebaseService } from '@firebase/app-types/private';
import { Observable } from 'rxjs/Observable';


@IonicPage()
@Component({
  selector: 'page-item-list',
  templateUrl: 'item-list.html',
})
export class ItemListPage {
  public pages : Array<{img:any,h2:string,h3:string,p:string}>;
  arrData: Observable<any[]>;
  myInput

  itemListref$ : Observable<any[]>;
  constructor(public navCtrl: NavController,
    public aDatabase:AngularFireDatabase) {
      this.itemListref$ = this.aDatabase.list('/items').valueChanges();
  }

}

