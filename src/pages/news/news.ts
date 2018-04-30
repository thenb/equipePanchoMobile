import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the News page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  news: Array<{title: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.news = [];
    for (let i = 1; i < 3; i++) {
      this.news.push({
        title: 'Item ' + i,       
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

}