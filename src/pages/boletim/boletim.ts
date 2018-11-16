import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BoletimPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-boletim',
  templateUrl: 'boletim.html',
})
export class BoletimPage {
  lista=[];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lista=[
      {materia:'Português' ,notaum:10,notadois:10,notafinal:10},
      {materia:'E.Sociais' ,notaum:10,notadois:10,notafinal:10},
      {materia:'Ciências' ,notaum:10,notadois:10,notafinal:10},
      {materia:'Matemática' ,notaum:10,notadois:10,notafinal:10},
      {materia:'Geografia' ,notaum:10,notadois:10,notafinal:10},
      {materia:'Ed.M' ,notaum:10,notadois:10,notafinal:10},
      {materia:'Física' ,notaum:10,notadois:10,notafinal:10},
      {materia:'Química' ,notaum:10,notadois:10,notafinal:10},
      {materia:'Literatura' ,notaum:10,notadois:10,notafinal:10},
   
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BoletimPage');

  }

}
