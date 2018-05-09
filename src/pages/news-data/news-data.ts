import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewsDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news-data',
  templateUrl: 'news-data.html',
})
export class NewsDataPage {

  news = {
    data_criacao: '',
    url_imagens: [],
    titulo: '',
    descricao: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.news.data_criacao= this.navParams.get('data_criacao');
    this.news.url_imagens= this.navParams.get('url_imagens');
    this.news.titulo= this.navParams.get('titulo');
    this.news.descricao= this.navParams.get('descricao');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsDataPage');
  }

}
