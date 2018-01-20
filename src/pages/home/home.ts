import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google;

/**
 * Para obter a chave
 * https://developers.google.com/maps/documentation/static-maps/get-api-key?hl=pt-br
 */
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController) { }

  ionViewDidLoad() {
    this.pages = [
      { title: 'Exemplo 1', component: 'Exemplo1Page' },
      { title: 'Exemplo 2', component: 'Exemplo2Page' },
      { title: 'Exemplo 3', component: 'Exemplo3Page' },
      { title: 'Exemplo 4', component: 'Exemplo4Page' }
    ];
  }

  openPage(page: any) {
    this.navCtrl.push(page.component);
  }
}
