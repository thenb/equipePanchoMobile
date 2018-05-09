import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImageListPage } from './image-list';

@NgModule({
  declarations: [
    ImageListPage,
  ],
  imports: [
    IonicPageModule.forChild(ImageListPage),
  ],
})
export class ImageListPageModule {}
