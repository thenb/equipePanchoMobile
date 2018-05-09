import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient, public loadingController: LoadingController) {

    let loader = this.loadingController.create({
      content: "Carregando"
    });  
    loader.present();
    this.http.get('https://equipepancho.herokuapp.com/getAllNews')
      // Call map on the response observable to get the parsed people object
      .toPromise().then(
        data => {
          this.news = data;
          loader.dismiss();
        }
      );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

  itemTapped(e : {}) {
    console.log('Valor saiu: ' + e);
    this.navCtrl.push('SingleNewsPage', {news: e});
  }

}