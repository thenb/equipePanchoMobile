import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser , InAppBrowserOptions } from '@ionic-native/in-app-browser';

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

  options : InAppBrowserOptions = {
    location : 'yes',//Or 'no' 
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls 
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only 
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only 
    toolbar : 'yes', //iOS only 
    enableViewportScale : 'no', //iOS only 
    allowInlineMediaPlayback : 'no',//iOS only 
    presentationstyle : 'pagesheet',//iOS only 
    fullscreen : 'yes',//Windows only    
  };


  urlList = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private theInAppBrowser: InAppBrowser) {

    this.urlList = this.navParams.get('url_links');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UrlListPage');
  }


  public openWithSystemBrowser(url : string){
    let target = "_blank";
    console.log("AAAAAAAAAA: " + url);
    this.theInAppBrowser.create(url,target,this.options);
  }

}