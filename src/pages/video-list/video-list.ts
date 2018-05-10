import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VideoListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video-list',
  templateUrl: 'video-list.html',
})
export class VideoListPage {

  videoList = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.videoList = this.navParams.get("url_videos");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoListPage');
  }

  onLoad() {
    
  }
}
