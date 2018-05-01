import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsPage } from './news';
import { HTTP } from '@ionic-native/http';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    NewsPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsPage),
  ],
  exports: [
    NewsPage
  ]
})
export class NewsPageModule {
  news: any;

  constructor(private http: HTTP) {
 
    this.http.get('https://equipepancho.herokuapp.com/getAllEvents', {}, {})
    .then(data =>{
        this.news = data;
    });
 
  }
}
