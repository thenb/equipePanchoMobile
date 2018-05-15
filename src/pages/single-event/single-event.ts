import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SingleEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-single-event',
  templateUrl: 'single-event.html',
})
export class SingleEventPage {

  dataRoot = 'EventDataPage';
  imagesRoot = 'ImageListPage';
  videosRoot = 'VideoListPage';
  urlsRoot = 'UrlListPage';
  data = {};

  myIndex: number;
  event: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.event = this.navParams.get('event');
    this.data = this.event;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingleEventPage');
  }

}
