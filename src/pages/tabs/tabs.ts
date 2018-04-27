import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from "../home/home"
import { ListPage } from "../list/list"

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class Tabs {

  newsTab = ListPage;
  eventsTab = ListPage;

  constructor(public navCtrl: NavController) {

  }

}
