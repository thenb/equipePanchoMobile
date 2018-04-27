import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from "../home/home"
import { ListPage } from "../list/list"

@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class News {

  constructor(public navCtrl: NavController) {

  }

}
