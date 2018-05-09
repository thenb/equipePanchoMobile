import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ImageListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-image-list',
  templateUrl: 'image-list.html',
})
export class ImageListPage {

  imgList = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.imgList = this.navParams.get("url_imagens");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImageListPage');
  }

}
