import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Tab2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {

  events: Array<{title: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.events = [];
    for (let i = 1; i < 3; i++) {
      this.events.push({
        title: 'Item ' + i,       
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }

}
