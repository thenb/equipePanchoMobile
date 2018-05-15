import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EventDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-data',
  templateUrl: 'event-data.html',
})
export class EventDataPage {

  event = {
    titulo : '',
    data_inicio: '',
    data_fim: '',
    url_imagens: '',
    localizacao: '',
    descricao: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.event.titulo = this.navParams.get('titulo');
    this.event.data_inicio = this.navParams.get("data_inicio");
    this.event.data_fim = this.navParams.get("data_fim");
    this.event.url_imagens = this.navParams.get("url_imagens");
    this.event.localizacao = this.navParams.get("localizacao");
    this.event.descricao = this.navParams.get("descricao");


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventDataPage');
  }

}
