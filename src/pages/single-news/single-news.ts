import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SingleNewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-single-news',
  templateUrl: 'single-news.html',
})
export class SingleNewsPage {


  dataRoot = 'NewsDataPage';
  imagesRoot = 'ImageListPage';
  videosRoot = 'VideoListPage';
  urlsRoot = 'UrlListPage';
  data = {};

  myIndex: number;
  news: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.news = this.navParams.get('news');
    this.data = this.news;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingleNewsPage');
  }

}
