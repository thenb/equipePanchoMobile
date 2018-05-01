import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

/**
 * Generated class for the News page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  news: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HTTP) {

    console.log("teste");
    this.http.get('https://equipepancho.herokuapp.com/getAllEvents', {}, {})
      .then(data => {

        console.log(data.data);
        this.news = JSON.parse(data.data);

        console.log(this.news);

      })
      .catch(error => {

        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);

      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

}