import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UrlListPage } from './url-list';

@NgModule({
  declarations: [
    UrlListPage,
  ],
  imports: [
    IonicPageModule.forChild(UrlListPage),
  ],
})
export class UrlListPageModule {}
