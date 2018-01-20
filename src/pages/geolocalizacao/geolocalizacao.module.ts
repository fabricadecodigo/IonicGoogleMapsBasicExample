import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeolocalizacaoPage } from './geolocalizacao';

@NgModule({
  declarations: [
    GeolocalizacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(GeolocalizacaoPage),
  ],
})
export class GeolocalizacaoPageModule {}
