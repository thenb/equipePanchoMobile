import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient, public loadingController: LoadingController) {
    let loader = this.loadingController.create({
      content: "Carregando"
    });  
    this.http.get('https://equipepancho.herokuapp.com/getAllEvents')
      // Call map on the response observable to get the parsed people object
      .toPromise().then(
        data => {
          this.events = data;
          loader.dismiss();
        }
      );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }

  itemTapped(e : {}) {
    this.navCtrl.push('SingleEventPage', {news: e});
  }

}
