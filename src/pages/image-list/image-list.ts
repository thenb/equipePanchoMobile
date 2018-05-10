import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PhotoViewer } from '@ionic-native/photo-viewer';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private photoViewer: PhotoViewer) {

    this.imgList = this.navParams.get("url_imagens");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImageListPage');
  }

  showImage( image ){
    this.photoViewer.show(image , '', {share: false});
  }

}
