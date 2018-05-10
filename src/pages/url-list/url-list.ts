import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser} from '@ionic-native/in-app-browser';

/**
 * Generated class for the UrlListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-url-list',
  templateUrl: 'url-list.html',
})
export class UrlListPage {


  urlList = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private theInAppBrowser: InAppBrowser) {

    this.urlList = this.navParams.get('url_links');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UrlListPage');
  }


  public openWithSystemBrowser(url : string){
    let target = this.theInAppBrowser.create('http://pudim.com.br/','‘_system',{location:'no'});
  }

}