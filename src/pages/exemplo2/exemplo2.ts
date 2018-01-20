import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

declare var google;

/**
 * https://developers.google.com/maps/documentation/javascript/adding-a-google-map
 */
@IonicPage()
@Component({
  selector: 'page-exemplo2',
  templateUrl: 'exemplo2.html',
})
export class Exemplo2Page {
  map: any;

  constructor() { }

  ionViewDidLoad() {
    const position = new google.maps.LatLng(-21.763409, -43.349034);

    const mapOptions = {
      zoom: 18,
      center: position,
      //disableDefaultUI: true
    }

    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    const marker = new google.maps.Marker({
      position: position,
      map: this.map,

      //Titulo
      //title: 'Minha posição',

      //Animção
      //animation: google.maps.Animation.DROP, // BOUNCE

      //Icone
      //icon: 'assets/imgs/pessoa.png'
    });
  }
}
