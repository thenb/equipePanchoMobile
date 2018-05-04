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

  newsRoot = 'SingleEventPage';

  myIndex: number;
  news: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    console.log('Valor existe: ' + this.navParams.get('news'));
    this.news = this.navParams.get('news');
    console.log('Valor ficou: ' + this.news);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingleNewsPage');
  }

}
