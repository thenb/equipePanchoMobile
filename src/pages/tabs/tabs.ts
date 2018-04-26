import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from "../home/home"
import { ListPage } from "../list/list"

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class Tabs {

  t1 = HomePage;
  t2 = ListPage;
  t3 = HomePage;
  t4 = ListPage;
  t5 = HomePage;

  constructor(public navCtrl: NavController) {

  }

}
