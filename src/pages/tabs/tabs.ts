//import { NavParams } from 'ionic-angular';
import { SigninPage } from './../signin/signin';
import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { ItemListPage } from "../item-list/item-list";
import { ItemFormPage } from "../item-form/item-form";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  home = HomePage;

  report_item = ItemFormPage;
  
  item_list = ItemListPage;

  login = SigninPage;

  about = AboutPage;

  constructor() {
  }
}
