import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Exemplo1Page } from './exemplo1';

@NgModule({
  declarations: [
    Exemplo1Page,
  ],
  imports: [
    IonicPageModule.forChild(Exemplo1Page),
  ],
})
export class Exemplo1PageModule {}
