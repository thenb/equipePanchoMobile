import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventDataPage } from './event-data';

@NgModule({
  declarations: [
    EventDataPage,
  ],
  imports: [
    IonicPageModule.forChild(EventDataPage),
  ],
})
export class EventDataPageModule {}
