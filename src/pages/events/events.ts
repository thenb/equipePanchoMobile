import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';

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

  events: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {

    this.http.get('https://equipepancho.herokuapp.com/getAllNews')
      // Call map on the response observable to get the parsed people object
      .toPromise().then(
        data => {
          this.events = data;
        }
      );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }

}
