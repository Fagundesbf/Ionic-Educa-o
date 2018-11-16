import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BoletimPage } from '../boletim/boletim';

/**
 * Generated class for the MenuthrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menuthre',
  templateUrl: 'menuthre.html',
})
export class MenuthrePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuthrePage');
  }
  boletim():void{
    this.navCtrl.push(BoletimPage)
  }

}
