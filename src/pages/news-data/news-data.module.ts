import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsDataPage } from './news-data';

@NgModule({
  declarations: [
    NewsDataPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsDataPage),
  ],
})
export class NewsDataPageModule {}
